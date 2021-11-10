declare namespace Express {
    export interface Response {
      paginatedResults: {
        results: Object;
      };
    }
}