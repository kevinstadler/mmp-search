import {useState, useRef} from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query'
import ReactPaginate from 'react-paginate';
import StellenTable from '../components/StellenTable.tsx'
import client from "../lib/api/client.ts";

// api endpoint paths
const STELLE_LIST = "/stelle";

export default function StellenSearch() {

  // the search inputs are just uncontrolled inputs
  const zitatInput = useRef<HTMLInputElement>(null);
  const limitInput = useRef<HTMLSelectElement>(null);

  // the value of each is adopted into the dynamic state when a dynamic search 
  // is actually executed
  const [zitat, setZitat] = useState('');
  const [limit, setLimit] = useState(20);

  // pagination
  const [page, setPage] = useState(0);
  // suppress query on first page load, wait for manual search trigger
  const [enabled, setEnabled] = useState(false);

  useQueryClient();
  const {data, isFetching} = useQuery({
    queryKey: ["stelle", zitat, limit, page],
    queryFn: async ({signal}) => {
      const {data} = await client.GET(STELLE_LIST, {
        params: {
          query: {
            limit: limit,
            offset: page * limit,
            zitat: zitat,
            zitat_lookup: "icontains"
          },
          signal
        }
      });
      return data;
    },
    enabled: enabled,
    refetchOnWindowFocus: false
  });

  // reset page back to 0 when running a new query/search term
  const listFromFirstPage = () => {
    setPage(0);
    setZitat(zitatInput.current!.value);
    setLimit(limitInput.current!.value);
    setEnabled(true);
  };

  return (
    <>
      <div className="search-interface">
        <label htmlFor="zitat">Search term:</label>

        <input id="zitat" ref={zitatInput} type="text" placeholder="gentis"
          onKeyDown={(e) => {if (e.key === "Enter") {listFromFirstPage()} }} />

        <select ref={limitInput} defaultValue={limit}>
          {[10, 20, 50, 100].map((n) => <option key={n} value={n}>{n} results per page</option>)}
        </select>

        <button type="submit" onClick={() => listFromFirstPage()}>Search</button>
      </div>

      { // only render result count when there is data
        enabled && !isFetching && (data?.results.length != 0) &&
        <div className="result-count">Showing results {page * limit + 1}-{page * limit + data?.results.length} of {data?.count} for search term "{zitat}"</div>
      }

      { // don't render result table until first query has been executed
        enabled &&
        <StellenTable stellen={data} isFetching={isFetching} />
      }

      { // only render pagination when there is more than 1 page worth of data
        enabled && !isFetching && (data?.count > limit) &&
        <div className="pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(e) => setPage(e.selected)}
            pageRangeDisplayed={3}
            forcePage={page}
            pageCount={Math.ceil(data?.count / limit)}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      }
    </>
  )
}
