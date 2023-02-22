/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  id: Scalars['String'];
  isbn: Scalars['String'];
  price: Scalars['Int'];
  sellerID: Scalars['String'];
  time: Scalars['String'];
};

export type AdvertisementTypeCreateManyInput = {
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['String'];
  isbn: Scalars['String'];
  price: Scalars['Int'];
  sellerID: Scalars['String'];
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
  sellerID?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdvertisementTypeUpdateManyMutationInput = {
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookName?: InputMaybe<StringFieldUpdateOperationsInput>;
  desc?: InputMaybe<StringFieldUpdateOperationsInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  sellerID?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type AggregateBook = {
  __typename?: 'AggregateBook';
  _count?: Maybe<BookCountAggregate>;
  _max?: Maybe<BookMaxAggregate>;
  _min?: Maybe<BookMinAggregate>;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int'];
  author: Scalars['Int'];
  id: Scalars['Int'];
  publishDate: Scalars['Int'];
  title: Scalars['Int'];
};

export type BookCountOrderByAggregateInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookCreateInput = {
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookCreateManyInput = {
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookGroupBy = {
  __typename?: 'BookGroupBy';
  _count?: Maybe<BookCountAggregate>;
  _max?: Maybe<BookMaxAggregate>;
  _min?: Maybe<BookMinAggregate>;
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BookMaxOrderByAggregateInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BookMinOrderByAggregateInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookOrderByWithAggregationInput = {
  _count?: InputMaybe<BookCountOrderByAggregateInput>;
  _max?: InputMaybe<BookMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookMinOrderByAggregateInput>;
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum BookScalarFieldEnum {
  Author = 'author',
  Id = 'id',
  PublishDate = 'publishDate',
  Title = 'title'
}

export type BookScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
  author?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  publishDate?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookUpdateInput = {
  author?: InputMaybe<StringFieldUpdateOperationsInput>;
  publishDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpdateManyMutationInput = {
  author?: InputMaybe<StringFieldUpdateOperationsInput>;
  publishDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  author?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  publishDate?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BookWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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
  createManyBook: AffectedRowsOutput;
  createOneAdvertisementType: AdvertisementType;
  createOneBook: Book;
  deleteManyAdvertisementType: AffectedRowsOutput;
  deleteManyBook: AffectedRowsOutput;
  deleteOneAdvertisementType?: Maybe<AdvertisementType>;
  deleteOneBook?: Maybe<Book>;
  updateManyAdvertisementType: AffectedRowsOutput;
  updateManyBook: AffectedRowsOutput;
  updateOneAdvertisementType?: Maybe<AdvertisementType>;
  updateOneBook?: Maybe<Book>;
  upsertOneAdvertisementType: AdvertisementType;
  upsertOneBook: Book;
};


export type MutationCreateManyAdvertisementTypeArgs = {
  data: Array<AdvertisementTypeCreateManyInput>;
};


export type MutationCreateManyBookArgs = {
  data: Array<BookCreateManyInput>;
};


export type MutationCreateOneAdvertisementTypeArgs = {
  data: AdvertisementTypeCreateInput;
};


export type MutationCreateOneBookArgs = {
  data: BookCreateInput;
};


export type MutationDeleteManyAdvertisementTypeArgs = {
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type MutationDeleteManyBookArgs = {
  where?: InputMaybe<BookWhereInput>;
};


export type MutationDeleteOneAdvertisementTypeArgs = {
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationDeleteOneBookArgs = {
  where: BookWhereUniqueInput;
};


export type MutationUpdateManyAdvertisementTypeArgs = {
  data: AdvertisementTypeUpdateManyMutationInput;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type MutationUpdateManyBookArgs = {
  data: BookUpdateManyMutationInput;
  where?: InputMaybe<BookWhereInput>;
};


export type MutationUpdateOneAdvertisementTypeArgs = {
  data: AdvertisementTypeUpdateInput;
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationUpdateOneBookArgs = {
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
};


export type MutationUpsertOneAdvertisementTypeArgs = {
  create: AdvertisementTypeCreateInput;
  update: AdvertisementTypeUpdateInput;
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationUpsertOneBookArgs = {
  create: BookCreateInput;
  update: BookUpdateInput;
  where: BookWhereUniqueInput;
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

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
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

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  advertisementType?: Maybe<AdvertisementType>;
  advertisementTypes: Array<AdvertisementType>;
  aggregateAdvertisementType: AggregateAdvertisementType;
  aggregateBook: AggregateBook;
  book?: Maybe<Book>;
  books: Array<Book>;
  findFirstAdvertisementType?: Maybe<AdvertisementType>;
  findFirstAdvertisementTypeOrThrow?: Maybe<AdvertisementType>;
  findFirstBook?: Maybe<Book>;
  findFirstBookOrThrow?: Maybe<Book>;
  getAdvertisementType?: Maybe<AdvertisementType>;
  getAllBooks: Array<Book>;
  getBook?: Maybe<Book>;
  groupByAdvertisementType: Array<AdvertisementTypeGroupBy>;
  groupByBook: Array<BookGroupBy>;
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


export type QueryAggregateBookArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};


export type QueryBookArgs = {
  where: BookWhereUniqueInput;
};


export type QueryBooksArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
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


export type QueryFindFirstBookArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};


export type QueryFindFirstBookOrThrowArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};


export type QueryGetAdvertisementTypeArgs = {
  where: AdvertisementTypeWhereUniqueInput;
};


export type QueryGetBookArgs = {
  where: BookWhereUniqueInput;
};


export type QueryGroupByAdvertisementTypeArgs = {
  by: Array<AdvertisementTypeScalarFieldEnum>;
  having?: InputMaybe<AdvertisementTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type QueryGroupByBookArgs = {
  by: Array<BookScalarFieldEnum>;
  having?: InputMaybe<BookScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BookOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
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

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
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
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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

export type ExapleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExapleQueryQuery = { __typename?: 'Query', getAllBooks: Array<{ __typename?: 'Book', id: string }> };


export const ExapleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExapleQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ExapleQueryQuery, ExapleQueryQueryVariables>;
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
  id: Scalars['String'];
  isbn: Scalars['String'];
  price: Scalars['Int'];
  sellerID: Scalars['String'];
  time: Scalars['String'];
};

export type AdvertisementTypeCreateManyInput = {
  authorName: Scalars['String'];
  bookName: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['String'];
  isbn: Scalars['String'];
  price: Scalars['Int'];
  sellerID: Scalars['String'];
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
  sellerID?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdvertisementTypeUpdateManyMutationInput = {
  authorName?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookName?: InputMaybe<StringFieldUpdateOperationsInput>;
  desc?: InputMaybe<StringFieldUpdateOperationsInput>;
  isbn?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  sellerID?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type AggregateBook = {
  __typename?: 'AggregateBook';
  _count?: Maybe<BookCountAggregate>;
  _max?: Maybe<BookMaxAggregate>;
  _min?: Maybe<BookMinAggregate>;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int'];
  author: Scalars['Int'];
  id: Scalars['Int'];
  publishDate: Scalars['Int'];
  title: Scalars['Int'];
};

export type BookCountOrderByAggregateInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookCreateInput = {
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookCreateManyInput = {
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookGroupBy = {
  __typename?: 'BookGroupBy';
  _count?: Maybe<BookCountAggregate>;
  _max?: Maybe<BookMaxAggregate>;
  _min?: Maybe<BookMinAggregate>;
  author: Scalars['String'];
  id: Scalars['String'];
  publishDate?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BookMaxOrderByAggregateInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BookMinOrderByAggregateInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookOrderByWithAggregationInput = {
  _count?: InputMaybe<BookCountOrderByAggregateInput>;
  _max?: InputMaybe<BookMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookMinOrderByAggregateInput>;
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  author?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum BookScalarFieldEnum {
  Author = 'author',
  Id = 'id',
  PublishDate = 'publishDate',
  Title = 'title'
}

export type BookScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
  author?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  publishDate?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookUpdateInput = {
  author?: InputMaybe<StringFieldUpdateOperationsInput>;
  publishDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookUpdateManyMutationInput = {
  author?: InputMaybe<StringFieldUpdateOperationsInput>;
  publishDate?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  author?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  publishDate?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BookWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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
  createManyBook: AffectedRowsOutput;
  createOneAdvertisementType: AdvertisementType;
  createOneBook: Book;
  deleteManyAdvertisementType: AffectedRowsOutput;
  deleteManyBook: AffectedRowsOutput;
  deleteOneAdvertisementType?: Maybe<AdvertisementType>;
  deleteOneBook?: Maybe<Book>;
  updateManyAdvertisementType: AffectedRowsOutput;
  updateManyBook: AffectedRowsOutput;
  updateOneAdvertisementType?: Maybe<AdvertisementType>;
  updateOneBook?: Maybe<Book>;
  upsertOneAdvertisementType: AdvertisementType;
  upsertOneBook: Book;
};


export type MutationCreateManyAdvertisementTypeArgs = {
  data: Array<AdvertisementTypeCreateManyInput>;
};


export type MutationCreateManyBookArgs = {
  data: Array<BookCreateManyInput>;
};


export type MutationCreateOneAdvertisementTypeArgs = {
  data: AdvertisementTypeCreateInput;
};


export type MutationCreateOneBookArgs = {
  data: BookCreateInput;
};


export type MutationDeleteManyAdvertisementTypeArgs = {
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type MutationDeleteManyBookArgs = {
  where?: InputMaybe<BookWhereInput>;
};


export type MutationDeleteOneAdvertisementTypeArgs = {
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationDeleteOneBookArgs = {
  where: BookWhereUniqueInput;
};


export type MutationUpdateManyAdvertisementTypeArgs = {
  data: AdvertisementTypeUpdateManyMutationInput;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type MutationUpdateManyBookArgs = {
  data: BookUpdateManyMutationInput;
  where?: InputMaybe<BookWhereInput>;
};


export type MutationUpdateOneAdvertisementTypeArgs = {
  data: AdvertisementTypeUpdateInput;
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationUpdateOneBookArgs = {
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
};


export type MutationUpsertOneAdvertisementTypeArgs = {
  create: AdvertisementTypeCreateInput;
  update: AdvertisementTypeUpdateInput;
  where: AdvertisementTypeWhereUniqueInput;
};


export type MutationUpsertOneBookArgs = {
  create: BookCreateInput;
  update: BookUpdateInput;
  where: BookWhereUniqueInput;
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

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
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

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  advertisementType?: Maybe<AdvertisementType>;
  advertisementTypes: Array<AdvertisementType>;
  aggregateAdvertisementType: AggregateAdvertisementType;
  aggregateBook: AggregateBook;
  book?: Maybe<Book>;
  books: Array<Book>;
  findFirstAdvertisementType?: Maybe<AdvertisementType>;
  findFirstAdvertisementTypeOrThrow?: Maybe<AdvertisementType>;
  findFirstBook?: Maybe<Book>;
  findFirstBookOrThrow?: Maybe<Book>;
  getAdvertisementType?: Maybe<AdvertisementType>;
  getAllBooks: Array<Book>;
  getBook?: Maybe<Book>;
  groupByAdvertisementType: Array<AdvertisementTypeGroupBy>;
  groupByBook: Array<BookGroupBy>;
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


export type QueryAggregateBookArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};


export type QueryBookArgs = {
  where: BookWhereUniqueInput;
};


export type QueryBooksArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
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


export type QueryFindFirstBookArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};


export type QueryFindFirstBookOrThrowArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};


export type QueryGetAdvertisementTypeArgs = {
  where: AdvertisementTypeWhereUniqueInput;
};


export type QueryGetBookArgs = {
  where: BookWhereUniqueInput;
};


export type QueryGroupByAdvertisementTypeArgs = {
  by: Array<AdvertisementTypeScalarFieldEnum>;
  having?: InputMaybe<AdvertisementTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AdvertisementTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdvertisementTypeWhereInput>;
};


export type QueryGroupByBookArgs = {
  by: Array<BookScalarFieldEnum>;
  having?: InputMaybe<BookScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BookOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
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

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
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
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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


export const ExapleQueryDocument = gql`
    query ExapleQuery {
  getAllBooks {
    id
  }
}
    `;

/**
 * __useExapleQueryQuery__
 *
 * To run a query within a React component, call `useExapleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExapleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExapleQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useExapleQueryQuery(baseOptions?: Apollo.QueryHookOptions<ExapleQueryQuery, ExapleQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExapleQueryQuery, ExapleQueryQueryVariables>(ExapleQueryDocument, options);
      }
export function useExapleQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExapleQueryQuery, ExapleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExapleQueryQuery, ExapleQueryQueryVariables>(ExapleQueryDocument, options);
        }
export type ExapleQueryQueryHookResult = ReturnType<typeof useExapleQueryQuery>;
export type ExapleQueryLazyQueryHookResult = ReturnType<typeof useExapleQueryLazyQuery>;
export type ExapleQueryQueryResult = Apollo.QueryResult<ExapleQueryQuery, ExapleQueryQueryVariables>;