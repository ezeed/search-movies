
export enum ResponseStatus {
  TRUE = 'True',
  FALSE = 'False'
}

export interface EmptyMovies {
  Response: ResponseStatus.FALSE
  Error: string
}

export interface Movies {
  Response: ResponseStatus.TRUE
  totalResults: string;
  Search: Movie[];
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export enum Type {
  Movie = "movie",
  Series = "series",
}
