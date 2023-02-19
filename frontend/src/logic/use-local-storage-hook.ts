import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T, trackingDimension?: number): [T, (newVal: T) => void] => {
	const setVal = useCallback(() => {
		if (typeof window === "undefined") {
			return initialValue;
		}
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	}, [initialValue, key]);

	const [storedValue, setStoredValue] = useState(initialValue);

	useEffect(() => {
		setStoredValue(setVal());
	}, [setVal]);

	useEffect(() => {
		// Register event listener for storage changes
		const fn = () => {
			// Update state
			setStoredValue(setVal());
		};
		window.addEventListener("storage", fn);

		return () => {
			window.removeEventListener("storage", fn);
		};
	}, [key, setVal]);

	const setValue = useCallback(
		(value: T) => {
			try {
				const valueToStore = value instanceof Function ? value(storedValue) : value;
				setStoredValue(valueToStore);
				if (typeof window !== "undefined") {
					window.localStorage.setItem(key, JSON.stringify(valueToStore));
					window.dispatchEvent(new Event("storage"));
					if (trackingDimension) {
						(window as any)._paq.push(["setCustomDimension", trackingDimension, JSON.stringify(valueToStore)]);
					}
				}
			} catch (error) {
				console.log(error);
			}
		},
		[key, storedValue, trackingDimension]
	);
	return [storedValue, setValue];
};
