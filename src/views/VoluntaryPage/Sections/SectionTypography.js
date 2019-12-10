import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
}));

const tileData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1z7tG8lc5ZHlkOSBUmQD6A_zEX6YXqplRjHq7lIuBTgzSiyZ9',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://http2.mlstatic.com/papel-de-parede-cachoeira-lago-floresta-natureza-gg359-D_NQ_NP_731409-MLB28498054130_102018-F.jpg',
    title: 'Image',
    author: 'author',
    cols: 4,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDvCt9yFzkLw2gR679lORa15j6rNSSIymMdQhjg1p4GKTIw_YT',
    title: 'Image',
    author: 'author',
    cols: 6,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/07/10/22/40/daisy-2491831_960_720.jpg',
    title: 'Image',
    author: 'author',
    cols: 5,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRCLoLMjq_ZcHWOj88ReE92DPqBDqZT_adFyncsyHhhcrOeOJt',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDNH_jXA6Wbe82bjHzArYsGyRUr9_BZIWJibRLOl3A1mUAaLQO',
    title: 'Image',
    author: 'author',
    cols: 3,
  },
  {
    img: 'https://mydias104231588.files.wordpress.com/2019/07/kl.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1z7tG8lc5ZHlkOSBUmQD6A_zEX6YXqplRjHq7lIuBTgzSiyZ9',
    title: 'Image',
    author: 'author',
    cols: 6,
  },
  {
    img: 'https://http2.mlstatic.com/papel-de-parede-cachoeira-lago-floresta-natureza-gg359-D_NQ_NP_731409-MLB28498054130_102018-F.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDvCt9yFzkLw2gR679lORa15j6rNSSIymMdQhjg1p4GKTIw_YT',
    title: 'Image',
    author: 'author',
    cols: 4,
  },
];
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Registro de nossos encontros</h2>
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={12} >
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}