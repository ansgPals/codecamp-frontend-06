import { useAuth } from "../../../src/components/commons/hocs/useAuth";
import NewProductContainer from "../../../src/components/units/newProduct/newProduct.container";

function newProductPage() {
  useAuth();
  return <NewProductContainer isEdit={false} />;
}
export default newProductPage;
