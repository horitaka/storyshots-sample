import React from 'react';
import Button from '@material-ui/core/Button';

export default function MaterialButton(props) {

  return (
    <div>
      <Button variant="contained" color="primary">{props.text}</Button>
    </div>
  );
}
