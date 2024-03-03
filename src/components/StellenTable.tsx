import YearRange from './YearRange.tsx'
import KeywordList from './KeywordList.tsx'

/** Search result listing table for a react-query of 'stellen'.
 * It knows nothing about pagination, only if it currently has data or is 
 * loading
 */
export default function StellenTable(props): JSX.Element {

  // special cases/missing data
  if (props.isFetching) {
    return (<div className="fetching">Fetching data...</div>);
  }
  if (props.stellen?.count == 0) {
    return (<div className="no-data">No matching results.</div>);
  }

  // default table rendering
  return (
    <table className="stellen-table">
      <thead>
        <tr>
          <th className="min-w-52">passage title</th>
          <th className="w-52">keywords</th>
          <th className="w-24">year range</th>
          <th className="w-52">author</th>
        </tr>
      </thead>
      <tbody>
        {props.stellen?.results.map(
          stelle =>
            <tr key={stelle.id}>
              <td><a href={`https://mmp.acdh-dev.oeaw.ac.at/archiv/stelle/detail/${stelle.id}`}>{stelle.display_label}</a></td>
              <td><KeywordList keywords={stelle.key_word} /></td>
              <td><YearRange entity={stelle} /></td>
              <td>{stelle.text?.autor[0]?.name}</td>
            </tr>
        )}
      </tbody>
    </table >
  );
}


