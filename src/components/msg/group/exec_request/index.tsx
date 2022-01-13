import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgExecRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const ExecRequest = (props: {
  message: MsgExecRequest;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgExecRequest"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default ExecRequest;