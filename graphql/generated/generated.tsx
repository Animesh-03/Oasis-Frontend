import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
};

export type AdvertisementBuyerResponseType = {
  accept: Scalars['Boolean'];
  touchId: Scalars['String'];
};

export type AdvertisementPostInputType = {
  book?: InputMaybe<BookCreationInput>;
  images?: InputMaybe<Array<Scalars['String']>>;
  isbn: Scalars['String'];
  price: Scalars['Float'];
};

export type AdvertisementSellerResponseType = {
  responsePrice: Scalars['Float'];
  touchId: Scalars['String'];
};

export type AdvertisementType = {
  __typename?: 'AdvertisementType';
  _count?: Maybe<AdvertisementTypeCount>;
  book: Book;
  bookID: Scalars['String'];
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  open: Scalars['Boolean'];
  price: Scalars['Int'];
  seller: UserType;
  sellerID: Scalars['String'];
  time: Scalars['String'];
  touches: Array<TouchType>;
};


export type AdvertisementTypeTouchesArgs = {
  cursor?: InputMaybe<TouchTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TouchTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TouchTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TouchTypeWhereInput>;
};

export type AdvertisementTypeCount = {
  __typename?: 'AdvertisementTypeCount';
  touches: Scalars['Int'];
};

export type AdvertisementTypeListRelationFilter = {
  every?: InputMaybe<AdvertisementTypeWhereInput>;
  none?: InputMaybe<AdvertisementTypeWhereInput>;
  some?: InputMaybe<AdvertisementTypeWhereInput>;
};

export type AdvertisementTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookID?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  open?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  seller?: InputMaybe<UserTypeOrderByWithRelationInput>;
  sellerID?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  touches?: InputMaybe<TouchTypeOrderByRelationAggregateInput>;
};

export type AdvertisementTypeRelationFilter = {
  is?: InputMaybe<AdvertisementTypeWhereInput>;
  isNot?: InputMaybe<AdvertisementTypeWhereInput>;
};

export enum AdvertisementTypeScalarFieldEnum {
  BookId = 'bookID',
  Id = 'id',
  Images = 'images',
  Open = 'open',
  Price = 'price',
  SellerId = 'sellerID',
  Time = 'time'
}

export type AdvertisementTypeWhereInput = {
  AND?: InputMaybe<Array<AdvertisementTypeWhereInput>>;
  NOT?: InputMaybe<Array<AdvertisementTypeWhereInput>>;
  OR?: InputMaybe<Array<AdvertisementTypeWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookID?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  open?: InputMaybe<BoolFilter>;
  price?: InputMaybe<IntFilter>;
  seller?: InputMaybe<UserTypeRelationFilter>;
  sellerID?: InputMaybe<StringFilter>;
  time?: InputMaybe<StringFilter>;
  touches?: InputMaybe<TouchTypeListRelationFilter>;
};

export type AdvertisementTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AdvertisementtouchInputType = {
  advertisementId: Scalars['String'];
  price: Scalars['Float'];
};

export type Book = {
  __typename?: 'Book';
  _count?: Maybe<BookCount>;
  advertisements: Array<AdvertisementType>;
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  category: Category;
  categoryID: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  isbn: Scalars['String'];
  purchases: Scalars['Int'];
};


export type BookAdvertisementsArgs = {
  cursor?: InputMaybe<AdvertisementTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdvertisementTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};

export type BookCount = {
  __typename?: 'BookCount';
  advertisements: Scalars['Int'];
};

export type BookCreationInput = {
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  isbn: Scalars['String'];
};

export type BookListRelationFilter = {
  every?: InputMaybe<BookWhereInput>;
  none?: InputMaybe<BookWhereInput>;
  some?: InputMaybe<BookWhereInput>;
};

export type BookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  advertisements?: InputMaybe<AdvertisementTypeOrderByRelationAggregateInput>;
  authorName?: InputMaybe<SortOrder>;
  bookName?: InputMaybe<SortOrder>;
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryID?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  purchases?: InputMaybe<SortOrder>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export enum BookScalarFieldEnum {
  AuthorName = 'authorName',
  BookName = 'bookName',
  CategoryId = 'categoryID',
  Description = 'description',
  Id = 'id',
  Isbn = 'isbn',
  Purchases = 'purchases'
}

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  advertisements?: InputMaybe<AdvertisementTypeListRelationFilter>;
  authorName?: InputMaybe<StringFilter>;
  bookName?: InputMaybe<StringFilter>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryID?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isbn?: InputMaybe<StringFilter>;
  purchases?: InputMaybe<IntFilter>;
};

export type BookWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  isbn?: InputMaybe<Scalars['String']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  _count?: Maybe<CategoryCount>;
  books: Array<Book>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
};


export type CategoryBooksArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  books: Scalars['Int'];
};

export type CategoryCreationInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: Scalars['String'];
  name: Scalars['String'];
};

export type CategoryOrderByWithRelationInput = {
  books?: InputMaybe<BookOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  books?: InputMaybe<BookListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  deleteUser: Scalars['Boolean'];
  loginUser?: Maybe<UserType>;
  logoutUser: Scalars['Boolean'];
  postAdvertisement: AdvertisementType;
  registerUser: Scalars['Boolean'];
  respondBuyerTouch: Scalars['Boolean'];
  respondSellerTouch: Scalars['Boolean'];
  touchAdvertisement: Scalars['Boolean'];
  updateUser: UserType;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CategoryCreationInput;
};


export type MutationLoginUserArgs = {
  loginDetails: UserLoginType;
};


export type MutationPostAdvertisementArgs = {
  postAdvertisement: AdvertisementPostInputType;
};


export type MutationRegisterUserArgs = {
  registerDetails: UserRegisterType;
};


export type MutationRespondBuyerTouchArgs = {
  responseInput: AdvertisementBuyerResponseType;
};


export type MutationRespondSellerTouchArgs = {
  responseInput: AdvertisementSellerResponseType;
};


export type MutationTouchAdvertisementArgs = {
  touchAdvertisement: AdvertisementtouchInputType;
};


export type MutationUpdateUserArgs = {
  input: UserUpdateType;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllActiveAdvertisements: Array<AdvertisementType>;
  getAllAdvertisements: Array<AdvertisementType>;
  getAllCategories: Array<Category>;
  getAllUsers: Array<UserType>;
  getCurrentUser: UserType;
  getTrendingBooks: Array<Book>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type TouchType = {
  __typename?: 'TouchType';
  advertisement: AdvertisementType;
  advertisementId: Scalars['String'];
  buyer: UserType;
  buyerId: Scalars['String'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isFinal: Scalars['Boolean'];
  price: Scalars['Int'];
  responded: Scalars['Boolean'];
  responded_price: Scalars['Int'];
};

export type TouchTypeListRelationFilter = {
  every?: InputMaybe<TouchTypeWhereInput>;
  none?: InputMaybe<TouchTypeWhereInput>;
  some?: InputMaybe<TouchTypeWhereInput>;
};

export type TouchTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TouchTypeOrderByWithRelationInput = {
  advertisement?: InputMaybe<AdvertisementTypeOrderByWithRelationInput>;
  advertisementId?: InputMaybe<SortOrder>;
  buyer?: InputMaybe<UserTypeOrderByWithRelationInput>;
  buyerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  isFinal?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  responded?: InputMaybe<SortOrder>;
  responded_price?: InputMaybe<SortOrder>;
};

export enum TouchTypeScalarFieldEnum {
  AdvertisementId = 'advertisementId',
  BuyerId = 'buyerId',
  Id = 'id',
  IsActive = 'isActive',
  IsFinal = 'isFinal',
  Price = 'price',
  Responded = 'responded',
  RespondedPrice = 'responded_price'
}

export type TouchTypeWhereInput = {
  AND?: InputMaybe<Array<TouchTypeWhereInput>>;
  NOT?: InputMaybe<Array<TouchTypeWhereInput>>;
  OR?: InputMaybe<Array<TouchTypeWhereInput>>;
  advertisement?: InputMaybe<AdvertisementTypeRelationFilter>;
  advertisementId?: InputMaybe<StringFilter>;
  buyer?: InputMaybe<UserTypeRelationFilter>;
  buyerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isFinal?: InputMaybe<BoolFilter>;
  price?: InputMaybe<IntFilter>;
  responded?: InputMaybe<BoolFilter>;
  responded_price?: InputMaybe<IntFilter>;
};

export type TouchTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type UserLoginType = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserRegisterType = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserType = {
  __typename?: 'UserType';
  _count?: Maybe<UserTypeCount>;
  address?: Maybe<Scalars['String']>;
  ads: Array<AdvertisementType>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  password: Scalars['String'];
  phoneNo?: Maybe<Scalars['String']>;
  touches: Array<TouchType>;
  username: Scalars['String'];
};


export type UserTypeAdsArgs = {
  cursor?: InputMaybe<AdvertisementTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdvertisementTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type UserTypeTouchesArgs = {
  cursor?: InputMaybe<TouchTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TouchTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TouchTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TouchTypeWhereInput>;
};

export type UserTypeCount = {
  __typename?: 'UserTypeCount';
  ads: Scalars['Int'];
  touches: Scalars['Int'];
};

export type UserTypeOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  ads?: InputMaybe<AdvertisementTypeOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNo?: InputMaybe<SortOrder>;
  touches?: InputMaybe<TouchTypeOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export type UserTypeRelationFilter = {
  is?: InputMaybe<UserTypeWhereInput>;
  isNot?: InputMaybe<UserTypeWhereInput>;
};

export type UserTypeWhereInput = {
  AND?: InputMaybe<Array<UserTypeWhereInput>>;
  NOT?: InputMaybe<Array<UserTypeWhereInput>>;
  OR?: InputMaybe<Array<UserTypeWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  ads?: InputMaybe<AdvertisementTypeListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNo?: InputMaybe<StringNullableFilter>;
  touches?: InputMaybe<TouchTypeListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserUpdateType = {
  address: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  phoneNo: Scalars['String'];
};


export const DeleteUserDocument = gql`
    mutation DeleteUser {
  deleteUser
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($loginDetails: UserLoginType!) {
  loginUser(loginDetails: $loginDetails) {
    id
    username
    password
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      loginDetails: // value for 'loginDetails'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const PostAdvertisementDocument = gql`
    mutation PostAdvertisement($postAdvertisement: AdvertisementPostInputType!) {
  postAdvertisement(postAdvertisement: $postAdvertisement) {
    images
    price
    time
    book {
      authorName
      bookName
      description
      id
      isbn
      category {
        name
      }
    }
  }
}
    `;
export type PostAdvertisementMutationFn = Apollo.MutationFunction<PostAdvertisementMutation, PostAdvertisementMutationVariables>;

/**
 * __usePostAdvertisementMutation__
 *
 * To run a mutation, you first call `usePostAdvertisementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAdvertisementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAdvertisementMutation, { data, loading, error }] = usePostAdvertisementMutation({
 *   variables: {
 *      postAdvertisement: // value for 'postAdvertisement'
 *   },
 * });
 */
export function usePostAdvertisementMutation(baseOptions?: Apollo.MutationHookOptions<PostAdvertisementMutation, PostAdvertisementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostAdvertisementMutation, PostAdvertisementMutationVariables>(PostAdvertisementDocument, options);
      }
export type PostAdvertisementMutationHookResult = ReturnType<typeof usePostAdvertisementMutation>;
export type PostAdvertisementMutationResult = Apollo.MutationResult<PostAdvertisementMutation>;
export type PostAdvertisementMutationOptions = Apollo.BaseMutationOptions<PostAdvertisementMutation, PostAdvertisementMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($registerDetails: UserRegisterType!) {
  registerUser(registerDetails: $registerDetails)
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      registerDetails: // value for 'registerDetails'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UserUpdateType!) {
  updateUser(input: $input) {
    id
    fullName
    username
    email
    address
    phoneNo
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  getAllCategories {
    id
    name
    description
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  getCurrentUser {
    id
    email
    username
    phoneNo
    address
    fullName
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetTrendingBooksDocument = gql`
    query GetTrendingBooks {
  getTrendingBooks {
    description
    bookName
  }
}
    `;

/**
 * __useGetTrendingBooksQuery__
 *
 * To run a query within a React component, call `useGetTrendingBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrendingBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetTrendingBooksQuery, GetTrendingBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendingBooksQuery, GetTrendingBooksQueryVariables>(GetTrendingBooksDocument, options);
      }
export function useGetTrendingBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingBooksQuery, GetTrendingBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendingBooksQuery, GetTrendingBooksQueryVariables>(GetTrendingBooksDocument, options);
        }
export type GetTrendingBooksQueryHookResult = ReturnType<typeof useGetTrendingBooksQuery>;
export type GetTrendingBooksLazyQueryHookResult = ReturnType<typeof useGetTrendingBooksLazyQuery>;
export type GetTrendingBooksQueryResult = Apollo.QueryResult<GetTrendingBooksQuery, GetTrendingBooksQueryVariables>;
export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type LoginUserMutationVariables = Exact<{
  loginDetails: UserLoginType;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'UserType', id: string, username: string, password: string } | null };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type PostAdvertisementMutationVariables = Exact<{
  postAdvertisement: AdvertisementPostInputType;
}>;


export type PostAdvertisementMutation = { __typename?: 'Mutation', postAdvertisement: { __typename?: 'AdvertisementType', images: Array<string>, price: number, time: string, book: { __typename?: 'Book', authorName: string, bookName: string, description: string, id: string, isbn: string, category: { __typename?: 'Category', name: string } } } };

export type RegisterUserMutationVariables = Exact<{
  registerDetails: UserRegisterType;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: boolean };

export type UpdateUserMutationVariables = Exact<{
  input: UserUpdateType;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UserType', id: string, fullName?: string | null, username: string, email: string, address?: string | null, phoneNo?: string | null } };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'Category', id: string, name: string, description?: string | null }> };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'UserType', id: string, email: string, username: string, phoneNo?: string | null, address?: string | null, fullName?: string | null } };

export type GetTrendingBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrendingBooksQuery = { __typename?: 'Query', getTrendingBooks: Array<{ __typename?: 'Book', description: string, bookName: string }> };
