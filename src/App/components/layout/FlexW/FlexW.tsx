import React, {ReactElement} from 'react';
import style from './FlexW.module.scss';

interface IFlexWProps {
  children: Array<React.ReactElement>|React.ReactElement|string
  style?:object
}

const FlexW: React.FunctionComponent<IFlexWProps> = (props) => { // ou React.FC
  return (
    <div className={style.FlexW} data-testid='FlexW' style={{backgroundColor:'none',...props.style}}>
      {props.children}
    </div>
  );
};

export default FlexW;
