/**
 * a simple comma-separated list of all Stichworte from an array of keywords
 */
export default function KeywordList({keywords}): JSX.Element {
  return (keywords.map((keyword) => keyword.stichwort).join(", "));
}
