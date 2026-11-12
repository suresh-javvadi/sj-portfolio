// Sits right before a section's heading (after its top padding) so jumping to
// it via nav/hash lands just below the fixed nav instead of in blank padding.
export default function ScrollAnchor({ id }) {
  return <div id={id} aria-hidden="true" className="h-px scroll-mt-24" />;
}
