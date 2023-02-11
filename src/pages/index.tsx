import MainLayout from "../layouts/MainLayout";
import UnderHeader from "../components/UnderHeader/UnderHeader";
import BestSellers from "../components/BestSellers/BestSellers";
import MainBlock from "../components/MainBlock/MainBlock";

const Index = () => {
  return (
    <MainLayout>
      <>
        <UnderHeader/>
        <MainBlock/>
        <BestSellers/>
      </>
    </MainLayout>
  )
}

export default Index;
