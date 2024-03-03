## mmp-search

A simple text passage search interface for the [Mapping Medieval Peoples](https://mmp.acdh-dev.oeaw.ac.at/) web API. The interface is live at https://kevinstadler.github.io/mmp-search/

### Building

```bash
npm install
npm run build
```

### Notes on the API design

- At least one `stelle` entry comes with 30MB(!) of embedded geojson as part of its `use_case`, which can slow down some of the endpoint requests in an unnecessary and unpredictable manner. For a list/search endpoint it's probably not desirable to include all dereferenced entities (in the case of `stelle`: `text` and its related entities, `use_case`) in the response, but provide a view that has fewer fields than the full `/stelle/{id}` endpoint.
- The mix of English and German in the field and endpoint names (e.g. `text__autor__start_date_year`, `key_word` as well as `stichwort`) is a bit unorthodox. Unless the terms are grounded in the research terminology of the field, their meaning might be unintuitive/confusing especially for non-German speakers.
- Inconsistent typing of fields with the same name and semantics across entities: `start_date` and `end_date` are numbers in `stelle` but strings in `text` (`text`s also appear to redundantly encode the same data again just with type number in the fields `not_before` and `not_after`)

## Algorithm for sorting search results by relevance

Sorting by relevance is mainly useful when there is a large number of responses/candidates, so the sorting algorithm should be implemented in the backend, not the frontend.

Features of all matching `stelle` which could be used to weight/rank them as more relevant in the results list:

- frequency (relative or absolute) of occurrences of the search term in the `zitat`
- if the search term is also present in the `key_word`s
- if the search term is also mentioned in the `kommentar`
- frequency (relative or absolute) of occurrences of the search term across other `stelle`n of the same `text`. This would imply grouping the `stelle` search results by their `text`, which may or may not be useful depending on the data/research question.

