import React, {ReactElement} from 'react';
import style from './FlexH.module.scss';

interface IFlexHProps {
  children: Array<React.ReactElement>|React.ReactElement|string
  style?:object
}

const FlexH: React.FunctionComponent<IFlexHProps> = (props) => { // ou React.FC
  return (
    <div className={style.FlexH} data-testid='FlexH' style={{backgroundColor:'none',...props.style}}>
      {props.children}
    </div>
  );
};

export default FlexH;
