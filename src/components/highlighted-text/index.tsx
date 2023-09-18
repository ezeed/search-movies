import { Fragment } from "react";
import './highlighted-text.css'

interface HighlightedTextProps {
  baseText: string;
  highlight: string
}

export function HighlightedText({ baseText = '', highlight = '' }: HighlightedTextProps): JSX.Element {
  if (!baseText || !highlight) return <>baseText</>
  let parts
  try {
    parts = baseText.split(new RegExp(`(${highlight})`, "gi"));
  } catch {
    console.error("regex error")
    return <>baseText</>
  }
  return (
    <>
      {
        parts.map((part) => (
          <Fragment key={crypto.randomUUID()}>
            {typeof highlight === 'string' && typeof part === 'string' && part.toLowerCase() === highlight.toLowerCase() ? (
              <span className="highlighted-text">{part}</span>
            ) : (
              part
            )}
          </Fragment>
        ))
      }
    </>
  )
}