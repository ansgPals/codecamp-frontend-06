import FunctionalComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  // {/* <FunctionalComponentChildPage count={123} /> */}

  return <>{FunctionalComponentChildPage({ count: 123 })}</>;
}
