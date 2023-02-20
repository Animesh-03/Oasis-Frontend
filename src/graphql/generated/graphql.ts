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

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createManyBook: AffectedRowsOutput;
  createOneBook: Book;
  deleteManyBook: AffectedRowsOutput;
  deleteOneBook?: Maybe<Book>;
  updateManyBook: AffectedRowsOutput;
  updateOneBook?: Maybe<Book>;
  upsertOneBook: Book;
};


export type MutationCreateManyBookArgs = {
  data: Array<BookCreateManyInput>;
};


export type MutationCreateOneBookArgs = {
  data: BookCreateInput;
};


export type MutationDeleteManyBookArgs = {
  where?: InputMaybe<BookWhereInput>;
};


export type MutationDeleteOneBookArgs = {
  where: BookWhereUniqueInput;
};


export type MutationUpdateManyBookArgs = {
  data: BookUpdateManyMutationInput;
  where?: InputMaybe<BookWhereInput>;
};


export type MutationUpdateOneBookArgs = {
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
};


export type MutationUpsertOneBookArgs = {
  create: BookCreateInput;
  update: BookUpdateInput;
  where: BookWhereUniqueInput;
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
  aggregateBook: AggregateBook;
  book?: Maybe<Book>;
  books: Array<Book>;
  findFirstBook?: Maybe<Book>;
  findFirstBookOrThrow?: Maybe<Book>;
  getAllBooks: Array<Book>;
  getBook?: Maybe<Book>;
  groupByBook: Array<BookGroupBy>;
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


export type QueryGetBookArgs = {
  where: BookWhereUniqueInput;
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

export type ExampleQueryQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', getAllBooks: Array<{ __typename?: 'Book', id: string, title: string }> };


export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createManyBook: AffectedRowsOutput;
  createOneBook: Book;
  deleteManyBook: AffectedRowsOutput;
  deleteOneBook?: Maybe<Book>;
  updateManyBook: AffectedRowsOutput;
  updateOneBook?: Maybe<Book>;
  upsertOneBook: Book;
};


export type MutationCreateManyBookArgs = {
  data: Array<BookCreateManyInput>;
};


export type MutationCreateOneBookArgs = {
  data: BookCreateInput;
};


export type MutationDeleteManyBookArgs = {
  where?: InputMaybe<BookWhereInput>;
};


export type MutationDeleteOneBookArgs = {
  where: BookWhereUniqueInput;
};


export type MutationUpdateManyBookArgs = {
  data: BookUpdateManyMutationInput;
  where?: InputMaybe<BookWhereInput>;
};


export type MutationUpdateOneBookArgs = {
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
};


export type MutationUpsertOneBookArgs = {
  create: BookCreateInput;
  update: BookUpdateInput;
  where: BookWhereUniqueInput;
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
  aggregateBook: AggregateBook;
  book?: Maybe<Book>;
  books: Array<Book>;
  findFirstBook?: Maybe<Book>;
  findFirstBookOrThrow?: Maybe<Book>;
  getAllBooks: Array<Book>;
  getBook?: Maybe<Book>;
  groupByBook: Array<BookGroupBy>;
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


export type QueryGetBookArgs = {
  where: BookWhereUniqueInput;
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

export type ExampleQueryQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', getAllBooks: Array<{ __typename?: 'Book', id: string, title: string }> };


export const ExampleQueryDocument = gql`
    query ExampleQuery($where: BookWhereUniqueInput!) {
  getAllBooks {
    id
    title
  }
}
    `;

/**
 * __useExampleQueryQuery__
 *
 * To run a query within a React component, call `useExampleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQueryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useExampleQueryQuery(baseOptions: Apollo.QueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
      }
export function useExampleQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export type ExampleQueryQueryHookResult = ReturnType<typeof useExampleQueryQuery>;
export type ExampleQueryLazyQueryHookResult = ReturnType<typeof useExampleQueryLazyQuery>;
export type ExampleQueryQueryResult = Apollo.QueryResult<ExampleQueryQuery, ExampleQueryQueryVariables>;