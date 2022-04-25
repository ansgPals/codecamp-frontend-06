import ProductCommentPage from "../../../src/components/units/productComment/productComment.container";
import ProductCommentListPage from "../../../src/components/units/productComment/productCommentList.container";
import ProductDetailContainer from "../../../src/components/units/productDetail/productDetail.container";

function ProductDetail() {
  return (
    <>
      <ProductDetailContainer />
      <ProductCommentPage />
      <ProductCommentListPage />
    </>
  );
}
export default ProductDetail;
