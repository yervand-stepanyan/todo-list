import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Input from '../../components/Input';
import Title from '../../components/Title';
import { TITLE } from '../../globals/constants';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <Title text={TITLE} />
      </div>
      <div className={classes.contentContainer}>
        <Card className={classes.card}>
          <CardContent>
            <Input />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Main;
