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

export type AdvertisementType = {
  __typename?: 'AdvertisementType';
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['String'];
  isbn: Scalars['String'];
  price: Scalars['Int'];
  seller: UserType;
  sellerID: Scalars['String'];
  time: Scalars['String'];
};

export type AdvertisementTypeAvgAggregate = {
  __typename?: 'AdvertisementTypeAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type AdvertisementTypeAvgOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeCountAggregate = {
  __typename?: 'AdvertisementTypeCountAggregate';
  _all: Scalars['Int'];
  authorName: Scalars['Int'];
  bookName: Scalars['Int'];
  desc: Scalars['Int'];
  id: Scalars['Int'];
  isbn: Scalars['Int'];
  price: Scalars['Int'];
  sellerID: Scalars['Int'];
  time: Scalars['Int'];
};

export type AdvertisementTypeCountOrderByAggregateInput = {
  authorName?: InputMaybe<SortOrder>;
  bookName?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sellerID?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeCreateInput = {
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isbn: Scalars['String'];
  price: Scalars['Int'];
  seller: UserTypeCreateNestedOneWithoutAdsInput;
  time: Scalars['String'];
};

export type AdvertisementTypeCreateManyInput = {
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isbn: Scalars['String'];
  price: Scalars['Int'];
  sellerID: Scalars['String'];
  time: Scalars['String'];
};

export type AdvertisementTypeCreateManySellerInput = {
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isbn: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type AdvertisementTypeCreateManySellerInputEnvelope = {
  data: Array<AdvertisementTypeCreateManySellerInput>;
};

export type AdvertisementTypeCreateNestedManyWithoutSellerInput = {
  connect?: InputMaybe<Array<AdvertisementTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdvertisementTypeCreateOrConnectWithoutSellerInput>>;
  create?: InputMaybe<Array<AdvertisementTypeCreateWithoutSellerInput>>;
  createMany?: InputMaybe<AdvertisementTypeCreateManySellerInputEnvelope>;
};

export type AdvertisementTypeCreateOrConnectWithoutSellerInput = {
  create: AdvertisementTypeCreateWithoutSellerInput;
  where: AdvertisementTypeWhereUniqueInput;
};

export type AdvertisementTypeCreateWithoutSellerInput = {
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isbn: Scalars['String'];
  price: Scalars['Int'];
  time: Scalars['String'];
};

export type AdvertisementTypeGroupBy = {
  __typename?: 'AdvertisementTypeGroupBy';
  _avg?: Maybe<AdvertisementTypeAvgAggregate>;
  _count?: Maybe<AdvertisementTypeCountAggregate>;
  _max?: Maybe<AdvertisementTypeMaxAggregate>;
  _min?: Maybe<AdvertisementTypeMinAggregate>;
  _sum?: Maybe<AdvertisementTypeSumAggregate>;
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['String'];
  isbn: Scalars['String'];
  price: Scalars['Int'];
  sellerID: Scalars['String'];
  time: Scalars['String'];
};

export type AdvertisementTypeListRelationFilter = {
  every?: InputMaybe<AdvertisementTypeWhereInput>;
  none?: InputMaybe<AdvertisementTypeWhereInput>;
  some?: InputMaybe<AdvertisementTypeWhereInput>;
};

export type AdvertisementTypeMaxAggregate = {
  __typename?: 'AdvertisementTypeMaxAggregate';
  authorName?: Maybe<Scalars['String']>;
  bookName?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sellerID?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type AdvertisementTypeMaxOrderByAggregateInput = {
  authorName?: InputMaybe<SortOrder>;
  bookName?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sellerID?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeMinAggregate = {
  __typename?: 'AdvertisementTypeMinAggregate';
  authorName?: Maybe<Scalars['String']>;
  bookName?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sellerID?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type AdvertisementTypeMinOrderByAggregateInput = {
  authorName?: InputMaybe<SortOrder>;
  bookName?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sellerID?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<AdvertisementTypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<AdvertisementTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<AdvertisementTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<AdvertisementTypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<AdvertisementTypeSumOrderByAggregateInput>;
  authorName?: InputMaybe<SortOrder>;
  bookName?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sellerID?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeOrderByWithRelationInput = {
  authorName?: InputMaybe<SortOrder>;
  bookName?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  seller?: InputMaybe<UserTypeOrderByWithRelationInput>;
  sellerID?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export enum AdvertisementTypeScalarFieldEnum {
  AuthorName = 'authorName',
  BookName = 'bookName',
  Desc = 'desc',
  Id = 'id',
  Isbn = 'isbn',
  Price = 'price',
  SellerId = 'sellerID',
  Time = 'time'
}

export type AdvertisementTypeScalarWhereInput = {
  AND?: InputMaybe<Array<AdvertisementTypeScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdvertisementTypeScalarWhereInput>>;
  OR?: InputMaybe<Array<AdvertisementTypeScalarWhereInput>>;
  authorName?: InputMaybe<StringFilter>;
  bookName?: InputMaybe<StringFilter>;
  desc?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isbn?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  sellerID?: InputMaybe<StringFilter>;
  time?: InputMaybe<StringFilter>;
};

export type AdvertisementTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AdvertisementTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AdvertisementTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AdvertisementTypeScalarWhereWithAggregatesInput>>;
  authorName?: InputMaybe<StringWithAggregatesFilter>;
  bookName?: InputMaybe<StringWithAggregatesFilter>;
  desc?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isbn?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<IntWithAggregatesFilter>;
  sellerID?: InputMaybe<StringWithAggregatesFilter>;
  time?: InputMaybe<StringWithAggregatesFilter>;
};

export type AdvertisementTypeSumAggregate = {
  __typename?: 'AdvertisementTypeSumAggregate';
  price?: Maybe<Scalars['Int']>;
};

export type AdvertisementTypeSumOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export type AdvertisementTypeUpdateInput = {
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookName?: InputMaybe<StringFieldUpdateOperationsInput>;
  desc?: InputMaybe<StringFieldUpdateOperationsInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  seller?: InputMaybe<UserTypeUpdateOneRequiredWithoutAdsNestedInput>;
  time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdvertisementTypeUpdateManyMutationInput = {
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookName?: InputMaybe<StringFieldUpdateOperationsInput>;
  desc?: InputMaybe<StringFieldUpdateOperationsInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdvertisementTypeUpdateManyWithWhereWithoutSellerInput = {
  data: AdvertisementTypeUpdateManyMutationInput;
  where: AdvertisementTypeScalarWhereInput;
};

export type AdvertisementTypeUpdateManyWithoutSellerNestedInput = {
  connect?: InputMaybe<Array<AdvertisementTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdvertisementTypeCreateOrConnectWithoutSellerInput>>;
  create?: InputMaybe<Array<AdvertisementTypeCreateWithoutSellerInput>>;
  createMany?: InputMaybe<AdvertisementTypeCreateManySellerInputEnvelope>;
  delete?: InputMaybe<Array<AdvertisementTypeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdvertisementTypeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdvertisementTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<AdvertisementTypeWhereUniqueInput>>;
  update?: InputMaybe<Array<AdvertisementTypeUpdateWithWhereUniqueWithoutSellerInput>>;
  updateMany?: InputMaybe<Array<AdvertisementTypeUpdateManyWithWhereWithoutSellerInput>>;
  upsert?: InputMaybe<Array<AdvertisementTypeUpsertWithWhereUniqueWithoutSellerInput>>;
};

export type AdvertisementTypeUpdateWithWhereUniqueWithoutSellerInput = {
  data: AdvertisementTypeUpdateWithoutSellerInput;
  where: AdvertisementTypeWhereUniqueInput;
};

export type AdvertisementTypeUpdateWithoutSellerInput = {
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookName?: InputMaybe<StringFieldUpdateOperationsInput>;
  desc?: InputMaybe<StringFieldUpdateOperationsInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdvertisementTypeUpsertWithWhereUniqueWithoutSellerInput = {
  create: AdvertisementTypeCreateWithoutSellerInput;
  update: AdvertisementTypeUpdateWithoutSellerInput;
  where: AdvertisementTypeWhereUniqueInput;
};

export type AdvertisementTypeWhereInput = {
  AND?: InputMaybe<Array<AdvertisementTypeWhereInput>>;
  NOT?: InputMaybe<Array<AdvertisementTypeWhereInput>>;
  OR?: InputMaybe<Array<AdvertisementTypeWhereInput>>;
  authorName?: InputMaybe<StringFilter>;
  bookName?: InputMaybe<StringFilter>;
  desc?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isbn?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  seller?: InputMaybe<UserTypeRelationFilter>;
  sellerID?: InputMaybe<StringFilter>;
  time?: InputMaybe<StringFilter>;
};

export type AdvertisementTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAdvertisementType = {
  __typename?: 'AggregateAdvertisementType';
  _avg?: Maybe<AdvertisementTypeAvgAggregate>;
  _count?: Maybe<AdvertisementTypeCountAggregate>;
  _max?: Maybe<AdvertisementTypeMaxAggregate>;
  _min?: Maybe<AdvertisementTypeMinAggregate>;
  _sum?: Maybe<AdvertisementTypeSumAggregate>;
};

export type AggregateUserType = {
  __typename?: 'AggregateUserType';
  _count?: Maybe<UserTypeCountAggregate>;
  _max?: Maybe<UserTypeMaxAggregate>;
  _min?: Maybe<UserTypeMinAggregate>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
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

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAdvertisementType: AffectedRowsOutput;
  createManyUserType: AffectedRowsOutput;
  createOneAdvertisementType: AdvertisementType;
  createOneUserType: UserType;
  deleteManyAdvertisementType: AffectedRowsOutput;
  deleteManyUserType: AffectedRowsOutput;
  deleteOneAdvertisementType?: Maybe<AdvertisementType>;
  deleteOneUserType?: Maybe<UserType>;
  loginUser?: Maybe<UserType>;
  registerUser: Scalars['Boolean'];
  updateManyAdvertisementType: AffectedRowsOutput;
  updateManyUserType: AffectedRowsOutput;
  updateOneAdvertisementType?: Maybe<AdvertisementType>;
  updateOneUserType?: Maybe<UserType>;
  upsertOneAdvertisementType: AdvertisementType;
  upsertOneUserType: UserType;
};


export type MutationCreateManyAdvertisementTypeArgs = {
  data: Array<AdvertisementTypeCreateManyInput>;
};


export type MutationCreateManyUserTypeArgs = {
  data: Array<UserTypeCreateManyInput>;
};


export type MutationCreateOneAdvertisementTypeArgs = {
  data: AdvertisementTypeCreateInput;
};


export type MutationCreateOneUserTypeArgs = {
  data: UserTypeCreateInput;
};


export type MutationDeleteManyAdvertisementTypeArgs = {
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type MutationDeleteManyUserTypeArgs = {
  where?: InputMaybe<UserTypeWhereInput>;
};


export type MutationDeleteOneAdvertisementTypeArgs = {
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationDeleteOneUserTypeArgs = {
  where: UserTypeWhereUniqueInput;
};


export type MutationLoginUserArgs = {
  loginDetails: UserLoginType;
};


export type MutationRegisterUserArgs = {
  registerDetails: UserRegisterType;
};


export type MutationUpdateManyAdvertisementTypeArgs = {
  data: AdvertisementTypeUpdateManyMutationInput;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type MutationUpdateManyUserTypeArgs = {
  data: UserTypeUpdateManyMutationInput;
  where?: InputMaybe<UserTypeWhereInput>;
};


export type MutationUpdateOneAdvertisementTypeArgs = {
  data: AdvertisementTypeUpdateInput;
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationUpdateOneUserTypeArgs = {
  data: UserTypeUpdateInput;
  where: UserTypeWhereUniqueInput;
};


export type MutationUpsertOneAdvertisementTypeArgs = {
  create: AdvertisementTypeCreateInput;
  update: AdvertisementTypeUpdateInput;
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationUpsertOneUserTypeArgs = {
  create: UserTypeCreateInput;
  update: UserTypeUpdateInput;
  where: UserTypeWhereUniqueInput;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
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

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
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

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  advertisementType?: Maybe<AdvertisementType>;
  advertisementTypes: Array<AdvertisementType>;
  aggregateAdvertisementType: AggregateAdvertisementType;
  aggregateUserType: AggregateUserType;
  findFirstAdvertisementType?: Maybe<AdvertisementType>;
  findFirstAdvertisementTypeOrThrow?: Maybe<AdvertisementType>;
  findFirstUserType?: Maybe<UserType>;
  findFirstUserTypeOrThrow?: Maybe<UserType>;
  getAdvertisementType?: Maybe<AdvertisementType>;
  getCurrentUser: UserType;
  getUserType?: Maybe<UserType>;
  groupByAdvertisementType: Array<AdvertisementTypeGroupBy>;
  groupByUserType: Array<UserTypeGroupBy>;
  userType?: Maybe<UserType>;
  userTypes: Array<UserType>;
};


export type QueryAdvertisementTypeArgs = {
  where: AdvertisementTypeWhereUniqueInput;
};


export type QueryAdvertisementTypesArgs = {
  cursor?: InputMaybe<AdvertisementTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdvertisementTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type QueryAggregateAdvertisementTypeArgs = {
  cursor?: InputMaybe<AdvertisementTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type QueryAggregateUserTypeArgs = {
  cursor?: InputMaybe<UserTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTypeWhereInput>;
};


export type QueryFindFirstAdvertisementTypeArgs = {
  cursor?: InputMaybe<AdvertisementTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdvertisementTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type QueryFindFirstAdvertisementTypeOrThrowArgs = {
  cursor?: InputMaybe<AdvertisementTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdvertisementTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type QueryFindFirstUserTypeArgs = {
  cursor?: InputMaybe<UserTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTypeWhereInput>;
};


export type QueryFindFirstUserTypeOrThrowArgs = {
  cursor?: InputMaybe<UserTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTypeWhereInput>;
};


export type QueryGetAdvertisementTypeArgs = {
  where: AdvertisementTypeWhereUniqueInput;
};


export type QueryGetUserTypeArgs = {
  where: UserTypeWhereUniqueInput;
};


export type QueryGroupByAdvertisementTypeArgs = {
  by: Array<AdvertisementTypeScalarFieldEnum>;
  having?: InputMaybe<AdvertisementTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type QueryGroupByUserTypeArgs = {
  by: Array<UserTypeScalarFieldEnum>;
  having?: InputMaybe<UserTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTypeWhereInput>;
};


export type QueryUserTypeArgs = {
  where: UserTypeWhereUniqueInput;
};


export type QueryUserTypesArgs = {
  cursor?: InputMaybe<UserTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTypeWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

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

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
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
  ads: Array<AdvertisementType>;
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
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

export type UserTypeCount = {
  __typename?: 'UserTypeCount';
  ads: Scalars['Int'];
};

export type UserTypeCountAggregate = {
  __typename?: 'UserTypeCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  password: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserTypeCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserTypeCreateInput = {
  ads?: InputMaybe<AdvertisementTypeCreateNestedManyWithoutSellerInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserTypeCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserTypeCreateNestedOneWithoutAdsInput = {
  connect?: InputMaybe<UserTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserTypeCreateOrConnectWithoutAdsInput>;
  create?: InputMaybe<UserTypeCreateWithoutAdsInput>;
};

export type UserTypeCreateOrConnectWithoutAdsInput = {
  create: UserTypeCreateWithoutAdsInput;
  where: UserTypeWhereUniqueInput;
};

export type UserTypeCreateWithoutAdsInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserTypeGroupBy = {
  __typename?: 'UserTypeGroupBy';
  _count?: Maybe<UserTypeCountAggregate>;
  _max?: Maybe<UserTypeMaxAggregate>;
  _min?: Maybe<UserTypeMinAggregate>;
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserTypeMaxAggregate = {
  __typename?: 'UserTypeMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserTypeMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserTypeMinAggregate = {
  __typename?: 'UserTypeMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserTypeMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserTypeOrderByWithAggregationInput = {
  _count?: InputMaybe<UserTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<UserTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserTypeMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserTypeOrderByWithRelationInput = {
  ads?: InputMaybe<AdvertisementTypeOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserTypeRelationFilter = {
  is?: InputMaybe<UserTypeWhereInput>;
  isNot?: InputMaybe<UserTypeWhereInput>;
};

export enum UserTypeScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Password = 'password',
  Username = 'username'
}

export type UserTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserTypeScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserTypeUpdateInput = {
  ads?: InputMaybe<AdvertisementTypeUpdateManyWithoutSellerNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserTypeUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserTypeUpdateOneRequiredWithoutAdsNestedInput = {
  connect?: InputMaybe<UserTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserTypeCreateOrConnectWithoutAdsInput>;
  create?: InputMaybe<UserTypeCreateWithoutAdsInput>;
  update?: InputMaybe<UserTypeUpdateWithoutAdsInput>;
  upsert?: InputMaybe<UserTypeUpsertWithoutAdsInput>;
};

export type UserTypeUpdateWithoutAdsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserTypeUpsertWithoutAdsInput = {
  create: UserTypeCreateWithoutAdsInput;
  update: UserTypeUpdateWithoutAdsInput;
};

export type UserTypeWhereInput = {
  AND?: InputMaybe<Array<UserTypeWhereInput>>;
  NOT?: InputMaybe<Array<UserTypeWhereInput>>;
  OR?: InputMaybe<Array<UserTypeWhereInput>>;
  ads?: InputMaybe<AdvertisementTypeListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};


export const LoginUserDocument = gql`
    mutation LoginUser($loginDetails: UserLoginType!) {
  loginUser(loginDetails: $loginDetails) {
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
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  getCurrentUser {
    id
    email
    username
    ads {
      bookName
    }
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
export type LoginUserMutationVariables = Exact<{
  loginDetails: UserLoginType;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'UserType', username: string, password: string } | null };

export type RegisterUserMutationVariables = Exact<{
  registerDetails: UserRegisterType;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: boolean };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'UserType', id: string, email: string, username: string, ads: Array<{ __typename?: 'AdvertisementType', bookName: string }> } };
