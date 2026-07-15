import { Sparkles } from 'lucide-react'

/**
 * AEO direct-answer block: a 40–60 word answer placed high on the page.
 * Answer engines (featured snippets, AI Overviews, Perplexity, ChatGPT) lift
 * this near-verbatim, so it must be self-contained and factual — it should
 * make sense with zero surrounding context.
 */
export default function AnswerBlock({ children, label = 'In short' }) {
  return (
    <aside className="answer-block">
      <p className="answer-block__label"><Sparkles aria-hidden="true" size={15} /> {label}</p>
      <p className="answer-block__text">{children}</p>
    </aside>
  )
}
