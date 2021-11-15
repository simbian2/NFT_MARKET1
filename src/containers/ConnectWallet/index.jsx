import {useEffect}  from "react";
import {ConnectWalletItemDetails} from '../../utils/allImgs'
import data from '../../data/data-containers/data-ConnectWalle.js';
import {getMainWidth} from '../../utils'

import Breadcrumb from '../../components/Breadcrumb'
import Navbar from '../../layouts/Head/Navbar'
import RowCard from './RowCard'

import './PageHeader.css'

const ConnectWalletContainer = () => {

  useEffect(() => {
    document.title = 'ConnectWallet'
    getMainWidth()
  },[])

  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />

        <div className="container-fluid">
          <div className="page-header breadcrumb-header min-vh-25 min-height-300 border-radius-xl mt-4 mb-30">
            <Breadcrumb text1='Connect Wallet' text2='Connect Wallet'/>
          </div>
          
        </div>
        
        
        <div className="container-fluid">
          <RowCard img={ConnectWalletItemDetails} data={data} />
        </div>

      </main>
    </>
  );
}

export default ConnectWalletContainer;

