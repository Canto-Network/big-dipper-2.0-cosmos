import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useWasmContractDetails } from './hooks';
import { useStyles } from './styles';

const Wasm = () => {
  const { t } = useTranslation('wasm');
  const { state } = useWasmContractDetails();
  const classes = useStyles();
  return (
    <>
      <Layout navTitle={t('wasmContractDetails')} className={classes.root}>
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <div>Hello world</div>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Wasm;