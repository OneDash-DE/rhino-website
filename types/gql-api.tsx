import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTime: any;
	JSON: any;
	Upload: any;
};

export type BooleanFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
	contains?: InputMaybe<Scalars["Boolean"]>;
	containsi?: InputMaybe<Scalars["Boolean"]>;
	endsWith?: InputMaybe<Scalars["Boolean"]>;
	eq?: InputMaybe<Scalars["Boolean"]>;
	eqi?: InputMaybe<Scalars["Boolean"]>;
	gt?: InputMaybe<Scalars["Boolean"]>;
	gte?: InputMaybe<Scalars["Boolean"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
	lt?: InputMaybe<Scalars["Boolean"]>;
	lte?: InputMaybe<Scalars["Boolean"]>;
	ne?: InputMaybe<Scalars["Boolean"]>;
	not?: InputMaybe<BooleanFilterInput>;
	notContains?: InputMaybe<Scalars["Boolean"]>;
	notContainsi?: InputMaybe<Scalars["Boolean"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]>;
	null?: InputMaybe<Scalars["Boolean"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
	startsWith?: InputMaybe<Scalars["Boolean"]>;
};

export type DateTimeFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
	contains?: InputMaybe<Scalars["DateTime"]>;
	containsi?: InputMaybe<Scalars["DateTime"]>;
	endsWith?: InputMaybe<Scalars["DateTime"]>;
	eq?: InputMaybe<Scalars["DateTime"]>;
	eqi?: InputMaybe<Scalars["DateTime"]>;
	gt?: InputMaybe<Scalars["DateTime"]>;
	gte?: InputMaybe<Scalars["DateTime"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
	lt?: InputMaybe<Scalars["DateTime"]>;
	lte?: InputMaybe<Scalars["DateTime"]>;
	ne?: InputMaybe<Scalars["DateTime"]>;
	not?: InputMaybe<DateTimeFilterInput>;
	notContains?: InputMaybe<Scalars["DateTime"]>;
	notContainsi?: InputMaybe<Scalars["DateTime"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]>;
	null?: InputMaybe<Scalars["Boolean"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
	startsWith?: InputMaybe<Scalars["DateTime"]>;
};

export type Event = {
	__typename?: "Event";
	createdAt?: Maybe<Scalars["DateTime"]>;
	date: Scalars["DateTime"];
	description: Scalars["String"];
	name: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EventEntity = {
	__typename?: "EventEntity";
	attributes?: Maybe<Event>;
	id?: Maybe<Scalars["ID"]>;
};

export type EventEntityResponse = {
	__typename?: "EventEntityResponse";
	data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
	__typename?: "EventEntityResponseCollection";
	data: Array<EventEntity>;
	meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	date?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<EventFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
	date?: InputMaybe<Scalars["DateTime"]>;
	description?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
};

export type FileInfoInput = {
	alternativeText?: InputMaybe<Scalars["String"]>;
	caption?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
};

export type FloatFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
	contains?: InputMaybe<Scalars["Float"]>;
	containsi?: InputMaybe<Scalars["Float"]>;
	endsWith?: InputMaybe<Scalars["Float"]>;
	eq?: InputMaybe<Scalars["Float"]>;
	eqi?: InputMaybe<Scalars["Float"]>;
	gt?: InputMaybe<Scalars["Float"]>;
	gte?: InputMaybe<Scalars["Float"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
	lt?: InputMaybe<Scalars["Float"]>;
	lte?: InputMaybe<Scalars["Float"]>;
	ne?: InputMaybe<Scalars["Float"]>;
	not?: InputMaybe<FloatFilterInput>;
	notContains?: InputMaybe<Scalars["Float"]>;
	notContainsi?: InputMaybe<Scalars["Float"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]>;
	null?: InputMaybe<Scalars["Boolean"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
	startsWith?: InputMaybe<Scalars["Float"]>;
};

export type GenericMorph =
	| Event
	| Homepage
	| I18NLocale
	| Photo
	| SocialMedia
	| SpotifyLink
	| UploadFile
	| UploadFolder
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsUser
	| YoutubeVideo;

export type Homepage = {
	__typename?: "Homepage";
	aboutText: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	heroImage: UploadFileEntityResponse;
	imprint: Scalars["String"];
	liveText: Scalars["String"];
	logoImage?: Maybe<UploadFileEntityResponse>;
	metaDescription: Scalars["String"];
	metaKeywords: Scalars["String"];
	metaPageUrl: Scalars["String"];
	metaTitle: Scalars["String"];
	privacyPolicy: Scalars["String"];
	termsAndConditions: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type HomepageEntity = {
	__typename?: "HomepageEntity";
	attributes?: Maybe<Homepage>;
	id?: Maybe<Scalars["ID"]>;
};

export type HomepageEntityResponse = {
	__typename?: "HomepageEntityResponse";
	data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
	aboutText?: InputMaybe<Scalars["String"]>;
	heroImage?: InputMaybe<Scalars["ID"]>;
	imprint?: InputMaybe<Scalars["String"]>;
	liveText?: InputMaybe<Scalars["String"]>;
	logoImage?: InputMaybe<Scalars["ID"]>;
	metaDescription?: InputMaybe<Scalars["String"]>;
	metaKeywords?: InputMaybe<Scalars["String"]>;
	metaPageUrl?: InputMaybe<Scalars["String"]>;
	metaTitle?: InputMaybe<Scalars["String"]>;
	privacyPolicy?: InputMaybe<Scalars["String"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
	termsAndConditions?: InputMaybe<Scalars["String"]>;
};

export type I18NLocale = {
	__typename?: "I18NLocale";
	code?: Maybe<Scalars["String"]>;
	createdAt?: Maybe<Scalars["DateTime"]>;
	name?: Maybe<Scalars["String"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
	__typename?: "I18NLocaleEntity";
	attributes?: Maybe<I18NLocale>;
	id?: Maybe<Scalars["ID"]>;
};

export type I18NLocaleEntityResponse = {
	__typename?: "I18NLocaleEntityResponse";
	data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
	__typename?: "I18NLocaleEntityResponseCollection";
	data: Array<I18NLocaleEntity>;
	meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	code?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<I18NLocaleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	contains?: InputMaybe<Scalars["ID"]>;
	containsi?: InputMaybe<Scalars["ID"]>;
	endsWith?: InputMaybe<Scalars["ID"]>;
	eq?: InputMaybe<Scalars["ID"]>;
	eqi?: InputMaybe<Scalars["ID"]>;
	gt?: InputMaybe<Scalars["ID"]>;
	gte?: InputMaybe<Scalars["ID"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	lt?: InputMaybe<Scalars["ID"]>;
	lte?: InputMaybe<Scalars["ID"]>;
	ne?: InputMaybe<Scalars["ID"]>;
	not?: InputMaybe<IdFilterInput>;
	notContains?: InputMaybe<Scalars["ID"]>;
	notContainsi?: InputMaybe<Scalars["ID"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]>;
	null?: InputMaybe<Scalars["Boolean"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	startsWith?: InputMaybe<Scalars["ID"]>;
};

export type IntFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
	contains?: InputMaybe<Scalars["Int"]>;
	containsi?: InputMaybe<Scalars["Int"]>;
	endsWith?: InputMaybe<Scalars["Int"]>;
	eq?: InputMaybe<Scalars["Int"]>;
	eqi?: InputMaybe<Scalars["Int"]>;
	gt?: InputMaybe<Scalars["Int"]>;
	gte?: InputMaybe<Scalars["Int"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
	lt?: InputMaybe<Scalars["Int"]>;
	lte?: InputMaybe<Scalars["Int"]>;
	ne?: InputMaybe<Scalars["Int"]>;
	not?: InputMaybe<IntFilterInput>;
	notContains?: InputMaybe<Scalars["Int"]>;
	notContainsi?: InputMaybe<Scalars["Int"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]>;
	null?: InputMaybe<Scalars["Boolean"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
	startsWith?: InputMaybe<Scalars["Int"]>;
};

export type JsonFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
	contains?: InputMaybe<Scalars["JSON"]>;
	containsi?: InputMaybe<Scalars["JSON"]>;
	endsWith?: InputMaybe<Scalars["JSON"]>;
	eq?: InputMaybe<Scalars["JSON"]>;
	eqi?: InputMaybe<Scalars["JSON"]>;
	gt?: InputMaybe<Scalars["JSON"]>;
	gte?: InputMaybe<Scalars["JSON"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
	lt?: InputMaybe<Scalars["JSON"]>;
	lte?: InputMaybe<Scalars["JSON"]>;
	ne?: InputMaybe<Scalars["JSON"]>;
	not?: InputMaybe<JsonFilterInput>;
	notContains?: InputMaybe<Scalars["JSON"]>;
	notContainsi?: InputMaybe<Scalars["JSON"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]>;
	null?: InputMaybe<Scalars["Boolean"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
	startsWith?: InputMaybe<Scalars["JSON"]>;
};

export type Mutation = {
	__typename?: "Mutation";
	/** Change user password. Confirm with the current password. */
	changePassword?: Maybe<UsersPermissionsLoginPayload>;
	createEvent?: Maybe<EventEntityResponse>;
	createSocialMedia?: Maybe<SocialMediaEntityResponse>;
	createSpotifyLink?: Maybe<SpotifyLinkEntityResponse>;
	createUploadFile?: Maybe<UploadFileEntityResponse>;
	createUploadFolder?: Maybe<UploadFolderEntityResponse>;
	/** Create a new role */
	createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
	/** Create a new user */
	createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	createYoutubeVideo?: Maybe<YoutubeVideoEntityResponse>;
	deleteEvent?: Maybe<EventEntityResponse>;
	deleteHomepage?: Maybe<HomepageEntityResponse>;
	deletePhoto?: Maybe<PhotoEntityResponse>;
	deleteSocialMedia?: Maybe<SocialMediaEntityResponse>;
	deleteSpotifyLink?: Maybe<SpotifyLinkEntityResponse>;
	deleteUploadFile?: Maybe<UploadFileEntityResponse>;
	deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
	/** Delete an existing role */
	deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
	/** Delete an existing user */
	deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	deleteYoutubeVideo?: Maybe<YoutubeVideoEntityResponse>;
	/** Confirm an email users email address */
	emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
	/** Request a reset password token */
	forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
	login: UsersPermissionsLoginPayload;
	multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
	/** Register a user */
	register: UsersPermissionsLoginPayload;
	removeFile?: Maybe<UploadFileEntityResponse>;
	/** Reset user password. Confirm with a code (resetToken from forgotPassword) */
	resetPassword?: Maybe<UsersPermissionsLoginPayload>;
	updateEvent?: Maybe<EventEntityResponse>;
	updateFileInfo: UploadFileEntityResponse;
	updateHomepage?: Maybe<HomepageEntityResponse>;
	updatePhoto?: Maybe<PhotoEntityResponse>;
	updateSocialMedia?: Maybe<SocialMediaEntityResponse>;
	updateSpotifyLink?: Maybe<SpotifyLinkEntityResponse>;
	updateUploadFile?: Maybe<UploadFileEntityResponse>;
	updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
	/** Update an existing role */
	updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
	/** Update an existing user */
	updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	updateYoutubeVideo?: Maybe<YoutubeVideoEntityResponse>;
	upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
	currentPassword: Scalars["String"];
	password: Scalars["String"];
	passwordConfirmation: Scalars["String"];
};

export type MutationCreateEventArgs = {
	data: EventInput;
};

export type MutationCreateSocialMediaArgs = {
	data: SocialMediaInput;
};

export type MutationCreateSpotifyLinkArgs = {
	data: SpotifyLinkInput;
};

export type MutationCreateUploadFileArgs = {
	data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
	data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
};

export type MutationCreateYoutubeVideoArgs = {
	data: YoutubeVideoInput;
};

export type MutationDeleteEventArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteSocialMediaArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteSpotifyLinkArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteUploadFileArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteUploadFolderArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteYoutubeVideoArgs = {
	id: Scalars["ID"];
};

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
	email: Scalars["String"];
};

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
	field?: InputMaybe<Scalars["String"]>;
	files: Array<InputMaybe<Scalars["Upload"]>>;
	ref?: InputMaybe<Scalars["String"]>;
	refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
	id: Scalars["ID"];
};

export type MutationResetPasswordArgs = {
	code: Scalars["String"];
	password: Scalars["String"];
	passwordConfirmation: Scalars["String"];
};

export type MutationUpdateEventArgs = {
	data: EventInput;
	id: Scalars["ID"];
};

export type MutationUpdateFileInfoArgs = {
	id: Scalars["ID"];
	info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateHomepageArgs = {
	data: HomepageInput;
};

export type MutationUpdatePhotoArgs = {
	data: PhotoInput;
};

export type MutationUpdateSocialMediaArgs = {
	data: SocialMediaInput;
	id: Scalars["ID"];
};

export type MutationUpdateSpotifyLinkArgs = {
	data: SpotifyLinkInput;
	id: Scalars["ID"];
};

export type MutationUpdateUploadFileArgs = {
	data: UploadFileInput;
	id: Scalars["ID"];
};

export type MutationUpdateUploadFolderArgs = {
	data: UploadFolderInput;
	id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
	id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
	id: Scalars["ID"];
};

export type MutationUpdateYoutubeVideoArgs = {
	data: YoutubeVideoInput;
	id: Scalars["ID"];
};

export type MutationUploadArgs = {
	field?: InputMaybe<Scalars["String"]>;
	file: Scalars["Upload"];
	info?: InputMaybe<FileInfoInput>;
	ref?: InputMaybe<Scalars["String"]>;
	refId?: InputMaybe<Scalars["ID"]>;
};

export type Pagination = {
	__typename?: "Pagination";
	page: Scalars["Int"];
	pageCount: Scalars["Int"];
	pageSize: Scalars["Int"];
	total: Scalars["Int"];
};

export type PaginationArg = {
	limit?: InputMaybe<Scalars["Int"]>;
	page?: InputMaybe<Scalars["Int"]>;
	pageSize?: InputMaybe<Scalars["Int"]>;
	start?: InputMaybe<Scalars["Int"]>;
};

export type Photo = {
	__typename?: "Photo";
	createdAt?: Maybe<Scalars["DateTime"]>;
	photos: UploadFileRelationResponseCollection;
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PhotoPhotosArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PhotoEntity = {
	__typename?: "PhotoEntity";
	attributes?: Maybe<Photo>;
	id?: Maybe<Scalars["ID"]>;
};

export type PhotoEntityResponse = {
	__typename?: "PhotoEntityResponse";
	data?: Maybe<PhotoEntity>;
};

export type PhotoInput = {
	photos?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
};

export type Query = {
	__typename?: "Query";
	event?: Maybe<EventEntityResponse>;
	events?: Maybe<EventEntityResponseCollection>;
	homepage?: Maybe<HomepageEntityResponse>;
	i18NLocale?: Maybe<I18NLocaleEntityResponse>;
	i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
	me?: Maybe<UsersPermissionsMe>;
	photo?: Maybe<PhotoEntityResponse>;
	socialMedia?: Maybe<SocialMediaEntityResponse>;
	socialMedias?: Maybe<SocialMediaEntityResponseCollection>;
	spotifyLink?: Maybe<SpotifyLinkEntityResponse>;
	spotifyLinks?: Maybe<SpotifyLinkEntityResponseCollection>;
	uploadFile?: Maybe<UploadFileEntityResponse>;
	uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
	uploadFolder?: Maybe<UploadFolderEntityResponse>;
	uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
	usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
	usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
	usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
	usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
	youtubeVideo?: Maybe<YoutubeVideoEntityResponse>;
	youtubeVideos?: Maybe<YoutubeVideoEntityResponseCollection>;
};

export type QueryEventArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEventsArgs = {
	filters?: InputMaybe<EventFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryI18NLocaleArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuerySocialMediaArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySocialMediasArgs = {
	filters?: InputMaybe<SocialMediaFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuerySpotifyLinkArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySpotifyLinksArgs = {
	filters?: InputMaybe<SpotifyLinkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFileArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFolderArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFoldersArgs = {
	filters?: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryYoutubeVideoArgs = {
	id?: InputMaybe<Scalars["ID"]>;
};

export type QueryYoutubeVideosArgs = {
	filters?: InputMaybe<YoutubeVideoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ResponseCollectionMeta = {
	__typename?: "ResponseCollectionMeta";
	pagination: Pagination;
};

export type SocialMedia = {
	__typename?: "SocialMedia";
	createdAt?: Maybe<Scalars["DateTime"]>;
	logo: UploadFileEntityResponse;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	url: Scalars["String"];
};

export type SocialMediaEntity = {
	__typename?: "SocialMediaEntity";
	attributes?: Maybe<SocialMedia>;
	id?: Maybe<Scalars["ID"]>;
};

export type SocialMediaEntityResponse = {
	__typename?: "SocialMediaEntityResponse";
	data?: Maybe<SocialMediaEntity>;
};

export type SocialMediaEntityResponseCollection = {
	__typename?: "SocialMediaEntityResponseCollection";
	data: Array<SocialMediaEntity>;
	meta: ResponseCollectionMeta;
};

export type SocialMediaFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<SocialMediaFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
};

export type SocialMediaInput = {
	logo?: InputMaybe<Scalars["ID"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
	url?: InputMaybe<Scalars["String"]>;
};

export type SpotifyLink = {
	__typename?: "SpotifyLink";
	createdAt?: Maybe<Scalars["DateTime"]>;
	embeddedLink: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SpotifyLinkEntity = {
	__typename?: "SpotifyLinkEntity";
	attributes?: Maybe<SpotifyLink>;
	id?: Maybe<Scalars["ID"]>;
};

export type SpotifyLinkEntityResponse = {
	__typename?: "SpotifyLinkEntityResponse";
	data?: Maybe<SpotifyLinkEntity>;
};

export type SpotifyLinkEntityResponseCollection = {
	__typename?: "SpotifyLinkEntityResponseCollection";
	data: Array<SpotifyLinkEntity>;
	meta: ResponseCollectionMeta;
};

export type SpotifyLinkFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<SpotifyLinkFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	embeddedLink?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<SpotifyLinkFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SpotifyLinkFiltersInput>>>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SpotifyLinkInput = {
	embeddedLink?: InputMaybe<Scalars["String"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
};

export type StringFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
	contains?: InputMaybe<Scalars["String"]>;
	containsi?: InputMaybe<Scalars["String"]>;
	endsWith?: InputMaybe<Scalars["String"]>;
	eq?: InputMaybe<Scalars["String"]>;
	eqi?: InputMaybe<Scalars["String"]>;
	gt?: InputMaybe<Scalars["String"]>;
	gte?: InputMaybe<Scalars["String"]>;
	in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
	lt?: InputMaybe<Scalars["String"]>;
	lte?: InputMaybe<Scalars["String"]>;
	ne?: InputMaybe<Scalars["String"]>;
	not?: InputMaybe<StringFilterInput>;
	notContains?: InputMaybe<Scalars["String"]>;
	notContainsi?: InputMaybe<Scalars["String"]>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
	notNull?: InputMaybe<Scalars["Boolean"]>;
	null?: InputMaybe<Scalars["Boolean"]>;
	or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
	startsWith?: InputMaybe<Scalars["String"]>;
};

export type UploadFile = {
	__typename?: "UploadFile";
	alternativeText?: Maybe<Scalars["String"]>;
	caption?: Maybe<Scalars["String"]>;
	createdAt?: Maybe<Scalars["DateTime"]>;
	ext?: Maybe<Scalars["String"]>;
	formats?: Maybe<Scalars["JSON"]>;
	hash: Scalars["String"];
	height?: Maybe<Scalars["Int"]>;
	mime: Scalars["String"];
	name: Scalars["String"];
	previewUrl?: Maybe<Scalars["String"]>;
	provider: Scalars["String"];
	provider_metadata?: Maybe<Scalars["JSON"]>;
	related?: Maybe<Array<Maybe<GenericMorph>>>;
	size: Scalars["Float"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
	url: Scalars["String"];
	width?: Maybe<Scalars["Int"]>;
};

export type UploadFileEntity = {
	__typename?: "UploadFileEntity";
	attributes?: Maybe<UploadFile>;
	id?: Maybe<Scalars["ID"]>;
};

export type UploadFileEntityResponse = {
	__typename?: "UploadFileEntityResponse";
	data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
	__typename?: "UploadFileEntityResponseCollection";
	data: Array<UploadFileEntity>;
	meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
	alternativeText?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	caption?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	ext?: InputMaybe<StringFilterInput>;
	folder?: InputMaybe<UploadFolderFiltersInput>;
	folderPath?: InputMaybe<StringFilterInput>;
	formats?: InputMaybe<JsonFilterInput>;
	hash?: InputMaybe<StringFilterInput>;
	height?: InputMaybe<IntFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	mime?: InputMaybe<StringFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UploadFileFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	previewUrl?: InputMaybe<StringFilterInput>;
	provider?: InputMaybe<StringFilterInput>;
	provider_metadata?: InputMaybe<JsonFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	size?: InputMaybe<FloatFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
	alternativeText?: InputMaybe<Scalars["String"]>;
	caption?: InputMaybe<Scalars["String"]>;
	ext?: InputMaybe<Scalars["String"]>;
	folder?: InputMaybe<Scalars["ID"]>;
	folderPath?: InputMaybe<Scalars["String"]>;
	formats?: InputMaybe<Scalars["JSON"]>;
	hash?: InputMaybe<Scalars["String"]>;
	height?: InputMaybe<Scalars["Int"]>;
	mime?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	previewUrl?: InputMaybe<Scalars["String"]>;
	provider?: InputMaybe<Scalars["String"]>;
	provider_metadata?: InputMaybe<Scalars["JSON"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
	size?: InputMaybe<Scalars["Float"]>;
	url?: InputMaybe<Scalars["String"]>;
	width?: InputMaybe<Scalars["Int"]>;
};

export type UploadFileRelationResponseCollection = {
	__typename?: "UploadFileRelationResponseCollection";
	data: Array<UploadFileEntity>;
};

export type UploadFolder = {
	__typename?: "UploadFolder";
	children?: Maybe<UploadFolderRelationResponseCollection>;
	createdAt?: Maybe<Scalars["DateTime"]>;
	files?: Maybe<UploadFileRelationResponseCollection>;
	name: Scalars["String"];
	parent?: Maybe<UploadFolderEntityResponse>;
	path: Scalars["String"];
	pathId: Scalars["Int"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UploadFolderChildrenArgs = {
	filters?: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderEntity = {
	__typename?: "UploadFolderEntity";
	attributes?: Maybe<UploadFolder>;
	id?: Maybe<Scalars["ID"]>;
};

export type UploadFolderEntityResponse = {
	__typename?: "UploadFolderEntityResponse";
	data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
	__typename?: "UploadFolderEntityResponseCollection";
	data: Array<UploadFolderEntity>;
	meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
	children?: InputMaybe<UploadFolderFiltersInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	files?: InputMaybe<UploadFileFiltersInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UploadFolderFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
	parent?: InputMaybe<UploadFolderFiltersInput>;
	path?: InputMaybe<StringFilterInput>;
	pathId?: InputMaybe<IntFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
	children?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	files?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	name?: InputMaybe<Scalars["String"]>;
	parent?: InputMaybe<Scalars["ID"]>;
	path?: InputMaybe<Scalars["String"]>;
	pathId?: InputMaybe<Scalars["Int"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
};

export type UploadFolderRelationResponseCollection = {
	__typename?: "UploadFolderRelationResponseCollection";
	data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
	__typename?: "UsersPermissionsCreateRolePayload";
	ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
	__typename?: "UsersPermissionsDeleteRolePayload";
	ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
	identifier: Scalars["String"];
	password: Scalars["String"];
	provider?: Scalars["String"];
};

export type UsersPermissionsLoginPayload = {
	__typename?: "UsersPermissionsLoginPayload";
	jwt?: Maybe<Scalars["String"]>;
	user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
	__typename?: "UsersPermissionsMe";
	blocked?: Maybe<Scalars["Boolean"]>;
	confirmed?: Maybe<Scalars["Boolean"]>;
	email?: Maybe<Scalars["String"]>;
	id: Scalars["ID"];
	role?: Maybe<UsersPermissionsMeRole>;
	username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
	__typename?: "UsersPermissionsMeRole";
	description?: Maybe<Scalars["String"]>;
	id: Scalars["ID"];
	name: Scalars["String"];
	type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPasswordPayload = {
	__typename?: "UsersPermissionsPasswordPayload";
	ok: Scalars["Boolean"];
};

export type UsersPermissionsPermission = {
	__typename?: "UsersPermissionsPermission";
	action: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	role?: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
	__typename?: "UsersPermissionsPermissionEntity";
	attributes?: Maybe<UsersPermissionsPermission>;
	id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
	action?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
	__typename?: "UsersPermissionsPermissionRelationResponseCollection";
	data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
	email: Scalars["String"];
	password: Scalars["String"];
	username: Scalars["String"];
};

export type UsersPermissionsRole = {
	__typename?: "UsersPermissionsRole";
	createdAt?: Maybe<Scalars["DateTime"]>;
	description?: Maybe<Scalars["String"]>;
	name: Scalars["String"];
	permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
	type?: Maybe<Scalars["String"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
	__typename?: "UsersPermissionsRoleEntity";
	attributes?: Maybe<UsersPermissionsRole>;
	id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleEntityResponse = {
	__typename?: "UsersPermissionsRoleEntityResponse";
	data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
	__typename?: "UsersPermissionsRoleEntityResponseCollection";
	data: Array<UsersPermissionsRoleEntity>;
	meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	type?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
	description?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
	type?: InputMaybe<Scalars["String"]>;
	users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
	__typename?: "UsersPermissionsUpdateRolePayload";
	ok: Scalars["Boolean"];
};

export type UsersPermissionsUser = {
	__typename?: "UsersPermissionsUser";
	blocked?: Maybe<Scalars["Boolean"]>;
	confirmed?: Maybe<Scalars["Boolean"]>;
	createdAt?: Maybe<Scalars["DateTime"]>;
	email: Scalars["String"];
	provider?: Maybe<Scalars["String"]>;
	role?: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	username: Scalars["String"];
};

export type UsersPermissionsUserEntity = {
	__typename?: "UsersPermissionsUserEntity";
	attributes?: Maybe<UsersPermissionsUser>;
	id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserEntityResponse = {
	__typename?: "UsersPermissionsUserEntityResponse";
	data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
	__typename?: "UsersPermissionsUserEntityResponseCollection";
	data: Array<UsersPermissionsUserEntity>;
	meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	blocked?: InputMaybe<BooleanFilterInput>;
	confirmationToken?: InputMaybe<StringFilterInput>;
	confirmed?: InputMaybe<BooleanFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	email?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<UsersPermissionsUserFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	password?: InputMaybe<StringFilterInput>;
	provider?: InputMaybe<StringFilterInput>;
	resetPasswordToken?: InputMaybe<StringFilterInput>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
	blocked?: InputMaybe<Scalars["Boolean"]>;
	confirmationToken?: InputMaybe<Scalars["String"]>;
	confirmed?: InputMaybe<Scalars["Boolean"]>;
	email?: InputMaybe<Scalars["String"]>;
	password?: InputMaybe<Scalars["String"]>;
	provider?: InputMaybe<Scalars["String"]>;
	resetPasswordToken?: InputMaybe<Scalars["String"]>;
	role?: InputMaybe<Scalars["ID"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
	username?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
	__typename?: "UsersPermissionsUserRelationResponseCollection";
	data: Array<UsersPermissionsUserEntity>;
};

export type YoutubeVideo = {
	__typename?: "YoutubeVideo";
	createdAt?: Maybe<Scalars["DateTime"]>;
	embeddedLink: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type YoutubeVideoEntity = {
	__typename?: "YoutubeVideoEntity";
	attributes?: Maybe<YoutubeVideo>;
	id?: Maybe<Scalars["ID"]>;
};

export type YoutubeVideoEntityResponse = {
	__typename?: "YoutubeVideoEntityResponse";
	data?: Maybe<YoutubeVideoEntity>;
};

export type YoutubeVideoEntityResponseCollection = {
	__typename?: "YoutubeVideoEntityResponseCollection";
	data: Array<YoutubeVideoEntity>;
	meta: ResponseCollectionMeta;
};

export type YoutubeVideoFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<YoutubeVideoFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	embeddedLink?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<YoutubeVideoFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<YoutubeVideoFiltersInput>>>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type YoutubeVideoInput = {
	embeddedLink?: InputMaybe<Scalars["String"]>;
	sitemap_exclude?: InputMaybe<Scalars["Boolean"]>;
};

export const BasicImageFragmentDoc = gql`
	fragment BasicImage on UploadFile {
		url
		alternativeText
		width
		height
		caption
		previewUrl
	}
`;
export const EventsDocument = gql`
	query events {
		events {
			data {
				id
				attributes {
					date
					description
					name
				}
			}
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
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
}
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
}
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const ExternalContentDocument = gql`
	query externalContent {
		spotifyLinks {
			data {
				id
				attributes {
					embeddedLink
				}
			}
		}
		youtubeVideos {
			data {
				id
				attributes {
					embeddedLink
				}
			}
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
	baseOptions?: Apollo.LazyQueryHookOptions<ExternalContentQuery, ExternalContentQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ExternalContentQuery, ExternalContentQueryVariables>(ExternalContentDocument, options);
}
export type ExternalContentQueryHookResult = ReturnType<typeof useExternalContentQuery>;
export type ExternalContentLazyQueryHookResult = ReturnType<typeof useExternalContentLazyQuery>;
export type ExternalContentQueryResult = Apollo.QueryResult<ExternalContentQuery, ExternalContentQueryVariables>;
export const HomepageDocument = gql`
	query homepage {
		homepage {
			data {
				attributes {
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
						data {
							id
							attributes {
								...BasicImage
							}
						}
					}
					heroImage {
						data {
							id
							attributes {
								...BasicImage
							}
						}
					}
				}
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
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;
export const PhotosDocument = gql`
	query photos {
		photo {
			data {
				id
				attributes {
					photos {
						data {
							id
							attributes {
								...BasicImage
							}
						}
					}
				}
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
export type PhotosQueryHookResult = ReturnType<typeof usePhotosQuery>;
export type PhotosLazyQueryHookResult = ReturnType<typeof usePhotosLazyQuery>;
export type PhotosQueryResult = Apollo.QueryResult<PhotosQuery, PhotosQueryVariables>;
export const SocialMediasDocument = gql`
	query socialMedias {
		socialMedias {
			data {
				id
				attributes {
					url
					logo {
						data {
							attributes {
								...BasicImage
							}
						}
					}
				}
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
export type SocialMediasQueryHookResult = ReturnType<typeof useSocialMediasQuery>;
export type SocialMediasLazyQueryHookResult = ReturnType<typeof useSocialMediasLazyQuery>;
export type SocialMediasQueryResult = Apollo.QueryResult<SocialMediasQuery, SocialMediasQueryVariables>;
export type EventsQueryVariables = Exact<{ [key: string]: never }>;

export type EventsQuery = {
	__typename?: "Query";
	events?: {
		__typename?: "EventEntityResponseCollection";
		data: Array<{
			__typename?: "EventEntity";
			id?: string | null;
			attributes?: { __typename?: "Event"; date: any; description: string; name: string } | null;
		}>;
	} | null;
};

export type ExternalContentQueryVariables = Exact<{ [key: string]: never }>;

export type ExternalContentQuery = {
	__typename?: "Query";
	spotifyLinks?: {
		__typename?: "SpotifyLinkEntityResponseCollection";
		data: Array<{
			__typename?: "SpotifyLinkEntity";
			id?: string | null;
			attributes?: { __typename?: "SpotifyLink"; embeddedLink: string } | null;
		}>;
	} | null;
	youtubeVideos?: {
		__typename?: "YoutubeVideoEntityResponseCollection";
		data: Array<{
			__typename?: "YoutubeVideoEntity";
			id?: string | null;
			attributes?: { __typename?: "YoutubeVideo"; embeddedLink: string } | null;
		}>;
	} | null;
};

export type HomepageQueryVariables = Exact<{ [key: string]: never }>;

export type HomepageQuery = {
	__typename?: "Query";
	homepage?: {
		__typename?: "HomepageEntityResponse";
		data?: {
			__typename?: "HomepageEntity";
			attributes?: {
				__typename?: "Homepage";
				aboutText: string;
				termsAndConditions: string;
				privacyPolicy: string;
				imprint: string;
				liveText: string;
				metaDescription: string;
				metaTitle: string;
				metaKeywords: string;
				metaPageUrl: string;
				logoImage?: {
					__typename?: "UploadFileEntityResponse";
					data?: {
						__typename?: "UploadFileEntity";
						id?: string | null;
						attributes?: {
							__typename?: "UploadFile";
							url: string;
							alternativeText?: string | null;
							width?: number | null;
							height?: number | null;
							caption?: string | null;
							previewUrl?: string | null;
						} | null;
					} | null;
				} | null;
				heroImage: {
					__typename?: "UploadFileEntityResponse";
					data?: {
						__typename?: "UploadFileEntity";
						id?: string | null;
						attributes?: {
							__typename?: "UploadFile";
							url: string;
							alternativeText?: string | null;
							width?: number | null;
							height?: number | null;
							caption?: string | null;
							previewUrl?: string | null;
						} | null;
					} | null;
				};
			} | null;
		} | null;
	} | null;
};

export type BasicImageFragment = {
	__typename?: "UploadFile";
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
		__typename?: "PhotoEntityResponse";
		data?: {
			__typename?: "PhotoEntity";
			id?: string | null;
			attributes?: {
				__typename?: "Photo";
				photos: {
					__typename?: "UploadFileRelationResponseCollection";
					data: Array<{
						__typename?: "UploadFileEntity";
						id?: string | null;
						attributes?: {
							__typename?: "UploadFile";
							url: string;
							alternativeText?: string | null;
							width?: number | null;
							height?: number | null;
							caption?: string | null;
							previewUrl?: string | null;
						} | null;
					}>;
				};
			} | null;
		} | null;
	} | null;
};

export type SocialMediasQueryVariables = Exact<{ [key: string]: never }>;

export type SocialMediasQuery = {
	__typename?: "Query";
	socialMedias?: {
		__typename?: "SocialMediaEntityResponseCollection";
		data: Array<{
			__typename?: "SocialMediaEntity";
			id?: string | null;
			attributes?: {
				__typename?: "SocialMedia";
				url: string;
				logo: {
					__typename?: "UploadFileEntityResponse";
					data?: {
						__typename?: "UploadFileEntity";
						attributes?: {
							__typename?: "UploadFile";
							url: string;
							alternativeText?: string | null;
							width?: number | null;
							height?: number | null;
							caption?: string | null;
							previewUrl?: string | null;
						} | null;
					} | null;
				};
			} | null;
		}>;
	} | null;
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
