import type DatedEntity from '../lib/api/types'

/**
 * convenient rendering of start_date / end_date range pair
 * TODO: render negative years as 'BCE'?
 */
export default function DateRange(props: {entity: DatedEntity}): JSX.Element {
  if (props.entity.start_date) {
    if (props.entity.start_date == props.entity.end_date || !props.entity.end_date) {
      return (<>{props.entity.start_date}</>);
    } else {
      return (<>{props.entity.start_date}-{props.entity.end_date}</>);
    }
  }
  // don't render anything
  return false;
}
