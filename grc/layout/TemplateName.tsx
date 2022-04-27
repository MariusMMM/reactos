import * as React from 'react';
import style from '.TemplateName.module.scss';

interface ITemplateNameProps {

}

const TemplateName: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={style.TemplateName} data-testid='TemplateName'>
      {props.children}
    </div>
  );
};

export default TemplateName;
