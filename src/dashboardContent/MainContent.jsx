import { Flex } from 'antd';
import React from 'react';
import Banner from './Banner';
import ProductLists from '../components/ProductLists';
import SellerLists from '../components/SellerLists';

export default function MainContent () {
    return (
        <div>
            <div style={{flex:1} }>
                <Flex vertical gap ="2.3rem">
                    <Banner/>
                    <ProductLists/>
                    <SellerLists/>
                </Flex>

            </div>
        </div>
    );
}