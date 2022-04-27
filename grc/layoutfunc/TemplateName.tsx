import React, {ReactElement} from 'react';
import style from '.TemplateName.module.scss';

interface ITemplateNameProps {
  children: Array<React.ReactElement>|React.ReactElement|string
  style?:object
}

const TemplateName: React.FunctionComponent<ITemplateNameProps> = (props) => { // ou React.FC
  return (
    <div className={style.TemplateName} data-testid='TemplateName' style={{backgroundColor:'none',...props.style}}>
      {props.children}
    </div>
  );
};

export default TemplateName;
