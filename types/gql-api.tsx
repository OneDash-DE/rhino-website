import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Date: { input: any; output: any };
	DateTime: { input: any; output: any };
	JSON: { input: any; output: any };
};

export type BooleanFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
	contains?: InputMaybe<Scalars["Boolean"]["input"]>;
	containsi?: InputMaybe<Scalars["Boolean"]["input"]>;
	endsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
	eq?: InputMaybe<Scalars["Boolean"]["input"]>;
	eqi?: InputMaybe<Scalars["Boolean"]["input"]>;
	gt?: InputMaybe<Scalars["Boolean"]["input"]>;
	gte?: InputMaybe<Scalars["Boolean"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
	lt?: InputMaybe<Scalars["Boolean"]["input"]>;
	lte?: InputMaybe<Scalars["Boolean"]["input"]>;
	ne?: InputMaybe<Scalars["Boolean"]["input"]>;
	nei?: InputMaybe<Scalars["Boolean"]["input"]>;
	not?: InputMaybe<BooleanFilterInput>;
	notContains?: InputMaybe<Scalars["Boolean"]["input"]>;
	notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DateFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
	contains?: InputMaybe<Scalars["Date"]["input"]>;
	containsi?: InputMaybe<Scalars["Date"]["input"]>;
	endsWith?: InputMaybe<Scalars["Date"]["input"]>;
	eq?: InputMaybe<Scalars["Date"]["input"]>;
	eqi?: InputMaybe<Scalars["Date"]["input"]>;
	gt?: InputMaybe<Scalars["Date"]["input"]>;
	gte?: InputMaybe<Scalars["Date"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
	lt?: InputMaybe<Scalars["Date"]["input"]>;
	lte?: InputMaybe<Scalars["Date"]["input"]>;
	ne?: InputMaybe<Scalars["Date"]["input"]>;
	nei?: InputMaybe<Scalars["Date"]["input"]>;
	not?: InputMaybe<DateFilterInput>;
	notContains?: InputMaybe<Scalars["Date"]["input"]>;
	notContainsi?: InputMaybe<Scalars["Date"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["Date"]["input"]>;
};

export type DateTimeFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	contains?: InputMaybe<Scalars["DateTime"]["input"]>;
	containsi?: InputMaybe<Scalars["DateTime"]["input"]>;
	endsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
	eq?: InputMaybe<Scalars["DateTime"]["input"]>;
	eqi?: InputMaybe<Scalars["DateTime"]["input"]>;
	gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	ne?: InputMaybe<Scalars["DateTime"]["input"]>;
	nei?: InputMaybe<Scalars["DateTime"]["input"]>;
	not?: InputMaybe<DateTimeFilterInput>;
	notContains?: InputMaybe<Scalars["DateTime"]["input"]>;
	notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DeleteMutationResponse = {
	__typename?: "DeleteMutationResponse";
	documentId: Scalars["ID"]["output"];
};

export type Event = {
	__typename?: "Event";
	canceled: Scalars["Boolean"]["output"];
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	date: Scalars["Date"]["output"];
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<Event>>;
	localizations_connection?: Maybe<EventRelationResponseCollection>;
	name: Scalars["String"]["output"];
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type EventLocalizationsArgs = {
	filters?: InputMaybe<EventFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type EventLocalizations_ConnectionArgs = {
	filters?: InputMaybe<EventFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type EventEntityResponseCollection = {
	__typename?: "EventEntityResponseCollection";
	nodes: Array<Event>;
	pageInfo: Pagination;
};

export type EventFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
	canceled?: InputMaybe<BooleanFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	date?: InputMaybe<DateFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<EventFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<EventFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
	canceled?: InputMaybe<Scalars["Boolean"]["input"]>;
	date?: InputMaybe<Scalars["Date"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EventRelationResponseCollection = {
	__typename?: "EventRelationResponseCollection";
	nodes: Array<Event>;
};

export type FileInfoInput = {
	alternativeText?: InputMaybe<Scalars["String"]["input"]>;
	caption?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	contains?: InputMaybe<Scalars["Float"]["input"]>;
	containsi?: InputMaybe<Scalars["Float"]["input"]>;
	endsWith?: InputMaybe<Scalars["Float"]["input"]>;
	eq?: InputMaybe<Scalars["Float"]["input"]>;
	eqi?: InputMaybe<Scalars["Float"]["input"]>;
	gt?: InputMaybe<Scalars["Float"]["input"]>;
	gte?: InputMaybe<Scalars["Float"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	lt?: InputMaybe<Scalars["Float"]["input"]>;
	lte?: InputMaybe<Scalars["Float"]["input"]>;
	ne?: InputMaybe<Scalars["Float"]["input"]>;
	nei?: InputMaybe<Scalars["Float"]["input"]>;
	not?: InputMaybe<FloatFilterInput>;
	notContains?: InputMaybe<Scalars["Float"]["input"]>;
	notContainsi?: InputMaybe<Scalars["Float"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenericMorph =
	| Event
	| Homepage
	| I18NLocale
	| Photo
	| ReviewWorkflowsWorkflow
	| ReviewWorkflowsWorkflowStage
	| SocialMedia
	| SpotifyLink
	| UploadFile
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsUser
	| YoutubeVideo;

export type Homepage = {
	__typename?: "Homepage";
	aboutText: Scalars["String"]["output"];
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	heroImage: UploadFile;
	imprint: Scalars["String"]["output"];
	liveText?: Maybe<Scalars["String"]["output"]>;
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<Homepage>>;
	localizations_connection?: Maybe<HomepageRelationResponseCollection>;
	logoImage?: Maybe<UploadFile>;
	metaDescription: Scalars["String"]["output"];
	metaKeywords: Scalars["String"]["output"];
	metaPageUrl: Scalars["String"]["output"];
	metaTitle: Scalars["String"]["output"];
	privacyPolicy: Scalars["String"]["output"];
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	termsAndConditions: Scalars["String"]["output"];
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HomepageInput = {
	aboutText?: InputMaybe<Scalars["String"]["input"]>;
	heroImage?: InputMaybe<Scalars["ID"]["input"]>;
	imprint?: InputMaybe<Scalars["String"]["input"]>;
	liveText?: InputMaybe<Scalars["String"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	logoImage?: InputMaybe<Scalars["ID"]["input"]>;
	metaDescription?: InputMaybe<Scalars["String"]["input"]>;
	metaKeywords?: InputMaybe<Scalars["String"]["input"]>;
	metaPageUrl?: InputMaybe<Scalars["String"]["input"]>;
	metaTitle?: InputMaybe<Scalars["String"]["input"]>;
	privacyPolicy?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	termsAndConditions?: InputMaybe<Scalars["String"]["input"]>;
};

export type HomepageRelationResponseCollection = {
	__typename?: "HomepageRelationResponseCollection";
	nodes: Array<Homepage>;
};

export type I18NLocale = {
	__typename?: "I18NLocale";
	code?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<I18NLocale>>;
	localizations_connection?: Maybe<I18NLocaleRelationResponseCollection>;
	name?: Maybe<Scalars["String"]["output"]>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type I18NLocaleLocalizationsArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type I18NLocaleLocalizations_ConnectionArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type I18NLocaleEntityResponseCollection = {
	__typename?: "I18NLocaleEntityResponseCollection";
	nodes: Array<I18NLocale>;
	pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	code?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<I18NLocaleFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<I18NLocaleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type I18NLocaleRelationResponseCollection = {
	__typename?: "I18NLocaleRelationResponseCollection";
	nodes: Array<I18NLocale>;
};

export type IdFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	contains?: InputMaybe<Scalars["ID"]["input"]>;
	containsi?: InputMaybe<Scalars["ID"]["input"]>;
	endsWith?: InputMaybe<Scalars["ID"]["input"]>;
	eq?: InputMaybe<Scalars["ID"]["input"]>;
	eqi?: InputMaybe<Scalars["ID"]["input"]>;
	gt?: InputMaybe<Scalars["ID"]["input"]>;
	gte?: InputMaybe<Scalars["ID"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	lt?: InputMaybe<Scalars["ID"]["input"]>;
	lte?: InputMaybe<Scalars["ID"]["input"]>;
	ne?: InputMaybe<Scalars["ID"]["input"]>;
	nei?: InputMaybe<Scalars["ID"]["input"]>;
	not?: InputMaybe<IdFilterInput>;
	notContains?: InputMaybe<Scalars["ID"]["input"]>;
	notContainsi?: InputMaybe<Scalars["ID"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IntFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	contains?: InputMaybe<Scalars["Int"]["input"]>;
	containsi?: InputMaybe<Scalars["Int"]["input"]>;
	endsWith?: InputMaybe<Scalars["Int"]["input"]>;
	eq?: InputMaybe<Scalars["Int"]["input"]>;
	eqi?: InputMaybe<Scalars["Int"]["input"]>;
	gt?: InputMaybe<Scalars["Int"]["input"]>;
	gte?: InputMaybe<Scalars["Int"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	lt?: InputMaybe<Scalars["Int"]["input"]>;
	lte?: InputMaybe<Scalars["Int"]["input"]>;
	ne?: InputMaybe<Scalars["Int"]["input"]>;
	nei?: InputMaybe<Scalars["Int"]["input"]>;
	not?: InputMaybe<IntFilterInput>;
	notContains?: InputMaybe<Scalars["Int"]["input"]>;
	notContainsi?: InputMaybe<Scalars["Int"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["Int"]["input"]>;
};

export type JsonFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	contains?: InputMaybe<Scalars["JSON"]["input"]>;
	containsi?: InputMaybe<Scalars["JSON"]["input"]>;
	endsWith?: InputMaybe<Scalars["JSON"]["input"]>;
	eq?: InputMaybe<Scalars["JSON"]["input"]>;
	eqi?: InputMaybe<Scalars["JSON"]["input"]>;
	gt?: InputMaybe<Scalars["JSON"]["input"]>;
	gte?: InputMaybe<Scalars["JSON"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	lt?: InputMaybe<Scalars["JSON"]["input"]>;
	lte?: InputMaybe<Scalars["JSON"]["input"]>;
	ne?: InputMaybe<Scalars["JSON"]["input"]>;
	nei?: InputMaybe<Scalars["JSON"]["input"]>;
	not?: InputMaybe<JsonFilterInput>;
	notContains?: InputMaybe<Scalars["JSON"]["input"]>;
	notContainsi?: InputMaybe<Scalars["JSON"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type Mutation = {
	__typename?: "Mutation";
	/** Change user password. Confirm with the current password. */
	changePassword?: Maybe<UsersPermissionsLoginPayload>;
	createEvent?: Maybe<Event>;
	createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
	createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
	createSocialMedia?: Maybe<SocialMedia>;
	createSpotifyLink?: Maybe<SpotifyLink>;
	/** Create a new role */
	createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
	/** Create a new user */
	createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	createYoutubeVideo?: Maybe<YoutubeVideo>;
	deleteEvent?: Maybe<DeleteMutationResponse>;
	deleteHomepage?: Maybe<DeleteMutationResponse>;
	deletePhoto?: Maybe<DeleteMutationResponse>;
	deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
	deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
	deleteSocialMedia?: Maybe<DeleteMutationResponse>;
	deleteSpotifyLink?: Maybe<DeleteMutationResponse>;
	deleteUploadFile?: Maybe<UploadFile>;
	/** Delete an existing role */
	deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
	/** Delete an existing user */
	deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	deleteYoutubeVideo?: Maybe<DeleteMutationResponse>;
	/** Confirm an email users email address */
	emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
	/** Request a reset password token */
	forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
	login: UsersPermissionsLoginPayload;
	/** Register a user */
	register: UsersPermissionsLoginPayload;
	/** Reset user password. Confirm with a code (resetToken from forgotPassword) */
	resetPassword?: Maybe<UsersPermissionsLoginPayload>;
	updateEvent?: Maybe<Event>;
	updateHomepage?: Maybe<Homepage>;
	updatePhoto?: Maybe<Photo>;
	updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
	updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
	updateSocialMedia?: Maybe<SocialMedia>;
	updateSpotifyLink?: Maybe<SpotifyLink>;
	updateUploadFile: UploadFile;
	/** Update an existing role */
	updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
	/** Update an existing user */
	updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	updateYoutubeVideo?: Maybe<YoutubeVideo>;
};

export type MutationChangePasswordArgs = {
	currentPassword: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
	passwordConfirmation: Scalars["String"]["input"];
};

export type MutationCreateEventArgs = {
	data: EventInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowArgs = {
	data: ReviewWorkflowsWorkflowInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
	data: ReviewWorkflowsWorkflowStageInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateSocialMediaArgs = {
	data: SocialMediaInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateSpotifyLinkArgs = {
	data: SpotifyLinkInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
};

export type MutationCreateYoutubeVideoArgs = {
	data: YoutubeVideoInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationDeleteEventArgs = {
	documentId: Scalars["ID"]["input"];
};

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
	documentId: Scalars["ID"]["input"];
};

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
	documentId: Scalars["ID"]["input"];
};

export type MutationDeleteSocialMediaArgs = {
	documentId: Scalars["ID"]["input"];
};

export type MutationDeleteSpotifyLinkArgs = {
	documentId: Scalars["ID"]["input"];
};

export type MutationDeleteUploadFileArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteYoutubeVideoArgs = {
	documentId: Scalars["ID"]["input"];
};

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars["String"]["input"];
};

export type MutationForgotPasswordArgs = {
	email: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
	code: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
	passwordConfirmation: Scalars["String"]["input"];
};

export type MutationUpdateEventArgs = {
	data: EventInput;
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateHomepageArgs = {
	data: HomepageInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdatePhotoArgs = {
	data: PhotoInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
	data: ReviewWorkflowsWorkflowInput;
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
	data: ReviewWorkflowsWorkflowStageInput;
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateSocialMediaArgs = {
	data: SocialMediaInput;
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateSpotifyLinkArgs = {
	data: SpotifyLinkInput;
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateUploadFileArgs = {
	id: Scalars["ID"]["input"];
	info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
	id: Scalars["ID"]["input"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
	id: Scalars["ID"]["input"];
};

export type MutationUpdateYoutubeVideoArgs = {
	data: YoutubeVideoInput;
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type Pagination = {
	__typename?: "Pagination";
	page: Scalars["Int"]["output"];
	pageCount: Scalars["Int"]["output"];
	pageSize: Scalars["Int"]["output"];
	total: Scalars["Int"]["output"];
};

export type PaginationArg = {
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	pageSize?: InputMaybe<Scalars["Int"]["input"]>;
	start?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Photo = {
	__typename?: "Photo";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<Photo>>;
	localizations_connection?: Maybe<PhotoRelationResponseCollection>;
	photos: Array<Maybe<UploadFile>>;
	photos_connection: UploadFileRelationResponseCollection;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PhotoPhotosArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PhotoPhotos_ConnectionArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PhotoInput = {
	locale?: InputMaybe<Scalars["String"]["input"]>;
	photos?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PhotoRelationResponseCollection = {
	__typename?: "PhotoRelationResponseCollection";
	nodes: Array<Photo>;
};

export enum PublicationStatus {
	Draft = "DRAFT",
	Published = "PUBLISHED",
}

export type Query = {
	__typename?: "Query";
	event?: Maybe<Event>;
	events: Array<Maybe<Event>>;
	events_connection?: Maybe<EventEntityResponseCollection>;
	homepage?: Maybe<Homepage>;
	i18NLocale?: Maybe<I18NLocale>;
	i18NLocales: Array<Maybe<I18NLocale>>;
	i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
	me?: Maybe<UsersPermissionsMe>;
	photo?: Maybe<Photo>;
	reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
	reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
	reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
	reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
	reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
	reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
	socialMedia?: Maybe<SocialMedia>;
	socialMedias: Array<Maybe<SocialMedia>>;
	socialMedias_connection?: Maybe<SocialMediaEntityResponseCollection>;
	spotifyLink?: Maybe<SpotifyLink>;
	spotifyLinks: Array<Maybe<SpotifyLink>>;
	spotifyLinks_connection?: Maybe<SpotifyLinkEntityResponseCollection>;
	uploadFile?: Maybe<UploadFile>;
	uploadFiles: Array<Maybe<UploadFile>>;
	uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
	usersPermissionsRole?: Maybe<UsersPermissionsRole>;
	usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
	usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
	usersPermissionsUser?: Maybe<UsersPermissionsUser>;
	usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
	usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
	youtubeVideo?: Maybe<YoutubeVideo>;
	youtubeVideos: Array<Maybe<YoutubeVideo>>;
	youtubeVideos_connection?: Maybe<YoutubeVideoEntityResponseCollection>;
};

export type QueryEventArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryEventsArgs = {
	filters?: InputMaybe<EventFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryEvents_ConnectionArgs = {
	filters?: InputMaybe<EventFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryHomepageArgs = {
	status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocaleArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocalesArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocales_ConnectionArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryPhotoArgs = {
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStageArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStagesArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowsArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QuerySocialMediaArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QuerySocialMediasArgs = {
	filters?: InputMaybe<SocialMediaFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QuerySocialMedias_ConnectionArgs = {
	filters?: InputMaybe<SocialMediaFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QuerySpotifyLinkArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QuerySpotifyLinksArgs = {
	filters?: InputMaybe<SpotifyLinkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QuerySpotifyLinks_ConnectionArgs = {
	filters?: InputMaybe<SpotifyLinkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFileArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFiles_ConnectionArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoleArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRolesArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoles_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUserArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsers_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryYoutubeVideoArgs = {
	documentId: Scalars["ID"]["input"];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryYoutubeVideosArgs = {
	filters?: InputMaybe<YoutubeVideoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryYoutubeVideos_ConnectionArgs = {
	filters?: InputMaybe<YoutubeVideoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
	__typename?: "ReviewWorkflowsWorkflow";
	contentTypes: Scalars["JSON"]["output"];
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<ReviewWorkflowsWorkflow>>;
	localizations_connection?: Maybe<ReviewWorkflowsWorkflowRelationResponseCollection>;
	name: Scalars["String"]["output"];
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
	stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ReviewWorkflowsWorkflowLocalizationsArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowLocalizations_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStagesArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
	__typename?: "ReviewWorkflowsWorkflowEntityResponseCollection";
	nodes: Array<ReviewWorkflowsWorkflow>;
	pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
	contentTypes?: InputMaybe<JsonFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
	contentTypes?: InputMaybe<Scalars["JSON"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	stages?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowRelationResponseCollection = {
	__typename?: "ReviewWorkflowsWorkflowRelationResponseCollection";
	nodes: Array<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStage = {
	__typename?: "ReviewWorkflowsWorkflowStage";
	color?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
	localizations_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
	name?: Maybe<Scalars["String"]["output"]>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageLocalizationsArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStageLocalizations_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
	__typename?: "ReviewWorkflowsWorkflowStageEntityResponseCollection";
	nodes: Array<ReviewWorkflowsWorkflowStage>;
	pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
	color?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
	color?: InputMaybe<Scalars["String"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	workflow?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
	__typename?: "ReviewWorkflowsWorkflowStageRelationResponseCollection";
	nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type SocialMedia = {
	__typename?: "SocialMedia";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<SocialMedia>>;
	localizations_connection?: Maybe<SocialMediaRelationResponseCollection>;
	logo: UploadFile;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	url: Scalars["String"]["output"];
};

export type SocialMediaLocalizationsArgs = {
	filters?: InputMaybe<SocialMediaFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SocialMediaLocalizations_ConnectionArgs = {
	filters?: InputMaybe<SocialMediaFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SocialMediaEntityResponseCollection = {
	__typename?: "SocialMediaEntityResponseCollection";
	nodes: Array<SocialMedia>;
	pageInfo: Pagination;
};

export type SocialMediaFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<SocialMediaFiltersInput>;
	not?: InputMaybe<SocialMediaFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
};

export type SocialMediaInput = {
	locale?: InputMaybe<Scalars["String"]["input"]>;
	logo?: InputMaybe<Scalars["ID"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	url?: InputMaybe<Scalars["String"]["input"]>;
};

export type SocialMediaRelationResponseCollection = {
	__typename?: "SocialMediaRelationResponseCollection";
	nodes: Array<SocialMedia>;
};

export type SpotifyLink = {
	__typename?: "SpotifyLink";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	embeddedLink: Scalars["String"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<SpotifyLink>>;
	localizations_connection?: Maybe<SpotifyLinkRelationResponseCollection>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type SpotifyLinkLocalizationsArgs = {
	filters?: InputMaybe<SpotifyLinkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SpotifyLinkLocalizations_ConnectionArgs = {
	filters?: InputMaybe<SpotifyLinkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SpotifyLinkEntityResponseCollection = {
	__typename?: "SpotifyLinkEntityResponseCollection";
	nodes: Array<SpotifyLink>;
	pageInfo: Pagination;
};

export type SpotifyLinkFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<SpotifyLinkFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	embeddedLink?: InputMaybe<StringFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<SpotifyLinkFiltersInput>;
	not?: InputMaybe<SpotifyLinkFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SpotifyLinkFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SpotifyLinkInput = {
	embeddedLink?: InputMaybe<Scalars["String"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SpotifyLinkRelationResponseCollection = {
	__typename?: "SpotifyLinkRelationResponseCollection";
	nodes: Array<SpotifyLink>;
};

export type StringFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	contains?: InputMaybe<Scalars["String"]["input"]>;
	containsi?: InputMaybe<Scalars["String"]["input"]>;
	endsWith?: InputMaybe<Scalars["String"]["input"]>;
	eq?: InputMaybe<Scalars["String"]["input"]>;
	eqi?: InputMaybe<Scalars["String"]["input"]>;
	gt?: InputMaybe<Scalars["String"]["input"]>;
	gte?: InputMaybe<Scalars["String"]["input"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	lt?: InputMaybe<Scalars["String"]["input"]>;
	lte?: InputMaybe<Scalars["String"]["input"]>;
	ne?: InputMaybe<Scalars["String"]["input"]>;
	nei?: InputMaybe<Scalars["String"]["input"]>;
	not?: InputMaybe<StringFilterInput>;
	notContains?: InputMaybe<Scalars["String"]["input"]>;
	notContainsi?: InputMaybe<Scalars["String"]["input"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	null?: InputMaybe<Scalars["Boolean"]["input"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFile = {
	__typename?: "UploadFile";
	alternativeText?: Maybe<Scalars["String"]["output"]>;
	caption?: Maybe<Scalars["String"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	ext?: Maybe<Scalars["String"]["output"]>;
	formats?: Maybe<Scalars["JSON"]["output"]>;
	hash: Scalars["String"]["output"];
	height?: Maybe<Scalars["Int"]["output"]>;
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<UploadFile>>;
	localizations_connection?: Maybe<UploadFileRelationResponseCollection>;
	mime: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	previewUrl?: Maybe<Scalars["String"]["output"]>;
	provider: Scalars["String"]["output"];
	provider_metadata?: Maybe<Scalars["JSON"]["output"]>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	related?: Maybe<Array<Maybe<GenericMorph>>>;
	size: Scalars["Float"]["output"];
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	url: Scalars["String"]["output"];
	width?: Maybe<Scalars["Int"]["output"]>;
};

export type UploadFileLocalizationsArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFileLocalizations_ConnectionArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFileEntityResponseCollection = {
	__typename?: "UploadFileEntityResponseCollection";
	nodes: Array<UploadFile>;
	pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
	alternativeText?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	caption?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	ext?: InputMaybe<StringFilterInput>;
	folderPath?: InputMaybe<StringFilterInput>;
	formats?: InputMaybe<JsonFilterInput>;
	hash?: InputMaybe<StringFilterInput>;
	height?: InputMaybe<IntFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<UploadFileFiltersInput>;
	mime?: InputMaybe<StringFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UploadFileFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	previewUrl?: InputMaybe<StringFilterInput>;
	provider?: InputMaybe<StringFilterInput>;
	provider_metadata?: InputMaybe<JsonFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	size?: InputMaybe<FloatFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
	__typename?: "UploadFileRelationResponseCollection";
	nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
	__typename?: "UsersPermissionsCreateRolePayload";
	ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsDeleteRolePayload = {
	__typename?: "UsersPermissionsDeleteRolePayload";
	ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsLoginInput = {
	identifier: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
	provider?: Scalars["String"]["input"];
};

export type UsersPermissionsLoginPayload = {
	__typename?: "UsersPermissionsLoginPayload";
	jwt?: Maybe<Scalars["String"]["output"]>;
	user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
	__typename?: "UsersPermissionsMe";
	blocked?: Maybe<Scalars["Boolean"]["output"]>;
	confirmed?: Maybe<Scalars["Boolean"]["output"]>;
	email?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	role?: Maybe<UsersPermissionsMeRole>;
	username: Scalars["String"]["output"];
};

export type UsersPermissionsMeRole = {
	__typename?: "UsersPermissionsMeRole";
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	type?: Maybe<Scalars["String"]["output"]>;
};

export type UsersPermissionsPasswordPayload = {
	__typename?: "UsersPermissionsPasswordPayload";
	ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsPermission = {
	__typename?: "UsersPermissionsPermission";
	action: Scalars["String"]["output"];
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<UsersPermissionsPermission>>;
	localizations_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	role?: Maybe<UsersPermissionsRole>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsPermissionLocalizationsArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsPermissionLocalizations_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsPermissionFiltersInput = {
	action?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
	__typename?: "UsersPermissionsPermissionRelationResponseCollection";
	nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
	email: Scalars["String"]["input"];
	password: Scalars["String"]["input"];
	username: Scalars["String"]["input"];
};

export type UsersPermissionsRole = {
	__typename?: "UsersPermissionsRole";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	documentId: Scalars["ID"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<UsersPermissionsRole>>;
	localizations_connection?: Maybe<UsersPermissionsRoleRelationResponseCollection>;
	name: Scalars["String"]["output"];
	permissions: Array<Maybe<UsersPermissionsPermission>>;
	permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	type?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	users: Array<Maybe<UsersPermissionsUser>>;
	users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRoleLocalizationsArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleLocalizations_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRolePermissions_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleUsers_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
	__typename?: "UsersPermissionsRoleEntityResponseCollection";
	nodes: Array<UsersPermissionsRole>;
	pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	type?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	type?: InputMaybe<Scalars["String"]["input"]>;
	users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type UsersPermissionsRoleRelationResponseCollection = {
	__typename?: "UsersPermissionsRoleRelationResponseCollection";
	nodes: Array<UsersPermissionsRole>;
};

export type UsersPermissionsUpdateRolePayload = {
	__typename?: "UsersPermissionsUpdateRolePayload";
	ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsUser = {
	__typename?: "UsersPermissionsUser";
	blocked?: Maybe<Scalars["Boolean"]["output"]>;
	confirmed?: Maybe<Scalars["Boolean"]["output"]>;
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	email: Scalars["String"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<UsersPermissionsUser>>;
	localizations_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
	provider?: Maybe<Scalars["String"]["output"]>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	role?: Maybe<UsersPermissionsRole>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
	username: Scalars["String"]["output"];
};

export type UsersPermissionsUserLocalizationsArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsUserLocalizations_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsUserEntityResponse = {
	__typename?: "UsersPermissionsUserEntityResponse";
	data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
	__typename?: "UsersPermissionsUserEntityResponseCollection";
	nodes: Array<UsersPermissionsUser>;
	pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	blocked?: InputMaybe<BooleanFilterInput>;
	confirmationToken?: InputMaybe<StringFilterInput>;
	confirmed?: InputMaybe<BooleanFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	email?: InputMaybe<StringFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<UsersPermissionsUserFiltersInput>;
	not?: InputMaybe<UsersPermissionsUserFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	password?: InputMaybe<StringFilterInput>;
	provider?: InputMaybe<StringFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	resetPasswordToken?: InputMaybe<StringFilterInput>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
	blocked?: InputMaybe<Scalars["Boolean"]["input"]>;
	confirmationToken?: InputMaybe<Scalars["String"]["input"]>;
	confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	provider?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<Scalars["ID"]["input"]>;
	username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
	__typename?: "UsersPermissionsUserRelationResponseCollection";
	nodes: Array<UsersPermissionsUser>;
};

export type YoutubeVideo = {
	__typename?: "YoutubeVideo";
	createdAt?: Maybe<Scalars["DateTime"]["output"]>;
	documentId: Scalars["ID"]["output"];
	embeddedLink: Scalars["String"]["output"];
	locale?: Maybe<Scalars["String"]["output"]>;
	localizations: Array<Maybe<YoutubeVideo>>;
	localizations_connection?: Maybe<YoutubeVideoRelationResponseCollection>;
	publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
	updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type YoutubeVideoLocalizationsArgs = {
	filters?: InputMaybe<YoutubeVideoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type YoutubeVideoLocalizations_ConnectionArgs = {
	filters?: InputMaybe<YoutubeVideoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type YoutubeVideoEntityResponseCollection = {
	__typename?: "YoutubeVideoEntityResponseCollection";
	nodes: Array<YoutubeVideo>;
	pageInfo: Pagination;
};

export type YoutubeVideoFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<YoutubeVideoFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	embeddedLink?: InputMaybe<StringFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<YoutubeVideoFiltersInput>;
	not?: InputMaybe<YoutubeVideoFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<YoutubeVideoFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type YoutubeVideoInput = {
	embeddedLink?: InputMaybe<Scalars["String"]["input"]>;
	locale?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type YoutubeVideoRelationResponseCollection = {
	__typename?: "YoutubeVideoRelationResponseCollection";
	nodes: Array<YoutubeVideo>;
};

export const BasicImageFragmentDoc = gql`
	fragment BasicImage on UploadFile {
		documentId
		url
		alternativeText
		width
		height
		caption
		previewUrl
	}
`;
export const EventsDocument = gql`
	query events($startDate: Date!) {
		events(sort: "date:asc", pagination: { limit: 150 }, filters: { date: { gt: $startDate } }) {
			documentId
			date
			name
			canceled
		}
	}
`;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *   },
 * });
 */
export function useEventsQuery(
	baseOptions: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables> &
		({ variables: EventsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
}
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
}
export function useEventsSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EventsQuery, EventsQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
}
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsSuspenseQueryHookResult = ReturnType<typeof useEventsSuspenseQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const ExternalContentDocument = gql`
	query externalContent {
		spotifyLinks {
			documentId
			embeddedLink
		}
		youtubeVideos {
			documentId
			embeddedLink
		}
	}
`;

/**
 * __useExternalContentQuery__
 *
 * To run a query within a React component, call `useExternalContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useExternalContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExternalContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useExternalContentQuery(baseOptions?: Apollo.QueryHookOptions<ExternalContentQuery, ExternalContentQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ExternalContentQuery, ExternalContentQueryVariables>(ExternalContentDocument, options);
}
export function useExternalContentLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<ExternalContentQuery, ExternalContentQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ExternalContentQuery, ExternalContentQueryVariables>(ExternalContentDocument, options);
}
export function useExternalContentSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ExternalContentQuery, ExternalContentQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<ExternalContentQuery, ExternalContentQueryVariables>(ExternalContentDocument, options);
}
export type ExternalContentQueryHookResult = ReturnType<typeof useExternalContentQuery>;
export type ExternalContentLazyQueryHookResult = ReturnType<typeof useExternalContentLazyQuery>;
export type ExternalContentSuspenseQueryHookResult = ReturnType<typeof useExternalContentSuspenseQuery>;
export type ExternalContentQueryResult = Apollo.QueryResult<ExternalContentQuery, ExternalContentQueryVariables>;
export const HomepageDocument = gql`
	query homepage {
		homepage {
			documentId
			aboutText
			termsAndConditions
			privacyPolicy
			imprint
			liveText
			metaDescription
			metaTitle
			metaKeywords
			metaPageUrl
			logoImage {
				...BasicImage
			}
			heroImage {
				...BasicImage
			}
		}
	}
	${BasicImageFragmentDoc}
`;

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageQuery(baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
}
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
}
export function useHomepageSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HomepageQuery, HomepageQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
}
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageSuspenseQueryHookResult = ReturnType<typeof useHomepageSuspenseQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;
export const PhotosDocument = gql`
	query photos {
		photo {
			documentId
			photos(pagination: { limit: 50 }) {
				...BasicImage
			}
		}
	}
	${BasicImageFragmentDoc}
`;

/**
 * __usePhotosQuery__
 *
 * To run a query within a React component, call `usePhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhotosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePhotosQuery(baseOptions?: Apollo.QueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, options);
}
export function usePhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, options);
}
export function usePhotosSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PhotosQuery, PhotosQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, options);
}
export type PhotosQueryHookResult = ReturnType<typeof usePhotosQuery>;
export type PhotosLazyQueryHookResult = ReturnType<typeof usePhotosLazyQuery>;
export type PhotosSuspenseQueryHookResult = ReturnType<typeof usePhotosSuspenseQuery>;
export type PhotosQueryResult = Apollo.QueryResult<PhotosQuery, PhotosQueryVariables>;
export const SocialMediasDocument = gql`
	query socialMedias {
		socialMedias {
			documentId
			url
			logo {
				...BasicImage
			}
		}
	}
	${BasicImageFragmentDoc}
`;

/**
 * __useSocialMediasQuery__
 *
 * To run a query within a React component, call `useSocialMediasQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialMediasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialMediasQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialMediasQuery(baseOptions?: Apollo.QueryHookOptions<SocialMediasQuery, SocialMediasQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SocialMediasQuery, SocialMediasQueryVariables>(SocialMediasDocument, options);
}
export function useSocialMediasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SocialMediasQuery, SocialMediasQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SocialMediasQuery, SocialMediasQueryVariables>(SocialMediasDocument, options);
}
export function useSocialMediasSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SocialMediasQuery, SocialMediasQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SocialMediasQuery, SocialMediasQueryVariables>(SocialMediasDocument, options);
}
export type SocialMediasQueryHookResult = ReturnType<typeof useSocialMediasQuery>;
export type SocialMediasLazyQueryHookResult = ReturnType<typeof useSocialMediasLazyQuery>;
export type SocialMediasSuspenseQueryHookResult = ReturnType<typeof useSocialMediasSuspenseQuery>;
export type SocialMediasQueryResult = Apollo.QueryResult<SocialMediasQuery, SocialMediasQueryVariables>;
export type EventsQueryVariables = Exact<{
	startDate: Scalars["Date"]["input"];
}>;

export type EventsQuery = {
	__typename?: "Query";
	events: Array<{ __typename?: "Event"; documentId: string; date: any; name: string; canceled: boolean } | null>;
};

export type ExternalContentQueryVariables = Exact<{ [key: string]: never }>;

export type ExternalContentQuery = {
	__typename?: "Query";
	spotifyLinks: Array<{ __typename?: "SpotifyLink"; documentId: string; embeddedLink: string } | null>;
	youtubeVideos: Array<{ __typename?: "YoutubeVideo"; documentId: string; embeddedLink: string } | null>;
};

export type HomepageQueryVariables = Exact<{ [key: string]: never }>;

export type HomepageQuery = {
	__typename?: "Query";
	homepage?: {
		__typename?: "Homepage";
		documentId: string;
		aboutText: string;
		termsAndConditions: string;
		privacyPolicy: string;
		imprint: string;
		liveText?: string | null;
		metaDescription: string;
		metaTitle: string;
		metaKeywords: string;
		metaPageUrl: string;
		logoImage?: {
			__typename?: "UploadFile";
			documentId: string;
			url: string;
			alternativeText?: string | null;
			width?: number | null;
			height?: number | null;
			caption?: string | null;
			previewUrl?: string | null;
		} | null;
		heroImage: {
			__typename?: "UploadFile";
			documentId: string;
			url: string;
			alternativeText?: string | null;
			width?: number | null;
			height?: number | null;
			caption?: string | null;
			previewUrl?: string | null;
		};
	} | null;
};

export type BasicImageFragment = {
	__typename?: "UploadFile";
	documentId: string;
	url: string;
	alternativeText?: string | null;
	width?: number | null;
	height?: number | null;
	caption?: string | null;
	previewUrl?: string | null;
};

export type PhotosQueryVariables = Exact<{ [key: string]: never }>;

export type PhotosQuery = {
	__typename?: "Query";
	photo?: {
		__typename?: "Photo";
		documentId: string;
		photos: Array<{
			__typename?: "UploadFile";
			documentId: string;
			url: string;
			alternativeText?: string | null;
			width?: number | null;
			height?: number | null;
			caption?: string | null;
			previewUrl?: string | null;
		} | null>;
	} | null;
};

export type SocialMediasQueryVariables = Exact<{ [key: string]: never }>;

export type SocialMediasQuery = {
	__typename?: "Query";
	socialMedias: Array<{
		__typename?: "SocialMedia";
		documentId: string;
		url: string;
		logo: {
			__typename?: "UploadFile";
			documentId: string;
			url: string;
			alternativeText?: string | null;
			width?: number | null;
			height?: number | null;
			caption?: string | null;
			previewUrl?: string | null;
		};
	} | null>;
};

export const namedOperations = {
	Query: {
		events: "events",
		externalContent: "externalContent",
		homepage: "homepage",
		photos: "photos",
		socialMedias: "socialMedias",
	},
	Fragment: {
		BasicImage: "BasicImage",
	},
};
