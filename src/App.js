/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import {Card, Container} from 'reactstrap'
import { Switch } from '@material-ui/core';
import { GridList, Box } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    // Ini adalah state awal yang di set sebelum render
    this.state = {
      isLoading:true, //inisialisasi loading data
      dark: true, //inisialisasi filter darker
      filterColor: true, //inisialisai filter color


      //inisialisai data 
      data: [
        {
          color : 'red',
          status : 'brighter'
        },
        {
          color : 'green',
          status : 'darker'
        },
        {
          color : 'yellow',
          status : 'brighter'
        },
        {
          color : 'blue',
          status : 'brighter'
        },
        {
          color : 'brown',
          status : 'darker'
        },
        {
          color : 'gray',
          status : 'darker'
        },
        {
          color : 'purple',
          status : 'darker'
        },
        {
          color : 'pink',
          status : 'brighter'
        },
        {
          color : 'red',
          status : 'brighter'
        },
        {
          color : 'green',
          status : 'darker'
        },
        {
          color : 'yellow',
          status : 'brighter'
        },
        {
          color : 'blue',
          status : 'brighter'
        },
        {
          color : 'brown',
          status : 'darker'
        },
        {
          color : 'gray',
          status : 'darker'
        },
        {
          color : 'purple',
          status : 'darker'
        },
        {
          color : 'pink',
          status : 'brighter'
        },
        {
          color : 'red',
          status : 'brighter'
        },
        {
          color : 'green',
          status : 'darker'
        },
        {
          color : 'yellow',
          status : 'brighter'
        },
        {
          color : 'blue',
          status : 'brighter'
        },
        {
          color : 'brown',
          status : 'darker'
        },
        {
          color : 'gray',
          status : 'darker'
        },
        {
          color : 'purple',
          status : 'darker'
        },
        {
          color : 'pink',
          status : 'brighter'
        },
        {
          color : 'red',
          status : 'brighter'
        },
        {
          color : 'green',
          status : 'darker'
        },
        {
          color : 'yellow',
          status : 'brighter'
        },
        {
          color : 'blue',
          status : 'brighter'
        },
        {
          color : 'brown',
          status : 'darker'
        },
        {
          color : 'gray',
          status : 'darker'
        },
        {
          color : 'purple',
          status : 'darker'
        },
        {
          color : 'pink',
          status : 'brighter'
        },
        {
          color : 'red',
          status : 'brighter'
        },
        {
          color : 'green',
          status : 'darker'
        },
        {
          color : 'yellow',
          status : 'brighter'
        },
        {
          color : 'blue',
          status : 'brighter'
        },
        {
          color : 'brown',
          status : 'darker'
        },
        {
          color : 'gray',
          status : 'darker'
        },
        {
          color : 'purple',
          status : 'darker'
        },
        {
          color : 'pink',
          status : 'brighter'
        },
    ]
    };
  }

  //function untuk filter data darker
  filterDarker(){
    if(this.state.dark === true) {
      this.setState({
        isLoading: true,
        dark:false,
        data2: this.state.data
      }, function(){
        this.setState({
          isLoading: false
        })
      })
    }else{
      this.setState({
        isLoading: true,
        dark:true
      })
      var filterDarker = this.state.data.filter(function(dark){
        return dark.status !== 'darker';
      })
      this.setState({data2: filterDarker}, function(){
        this.setState({
          isLoading: false
        })
      })
    }
  }


  //function untuk filter data sesuai dengan warna
  filterColor(color){
    if(this.state.filterColor === true) {
      this.setState({
        isLoading: true,
        filterColor:false,
        data2: this.state.data
      }, function(){
        this.setState({
          isLoading: false
        })
      })
    }else{
      this.setState({
        isLoading: true,
        filterColor:true
      })
      var filterColor = this.state.data.filter(function(warna){
        return warna.color === color;
      })
      this.setState({data2: filterColor}, function(){
        this.setState({
          isLoading: false
        })
      })
    }
  }

  //function yang dijalankan ketika komponen di jalankan 
  componentDidMount(){
    this.filterDarker();
    this.filterColor();
  }

  render() {
    return(
      <div className="row">
      {/* container galery */}
      <Container style={styles.Container}> 
        {this.state.isLoading === true ? (
          <Card/>
        ) : (
          <div>
            {/* membuat baris list */}
            <GridList cellHeight='auto'>
            {/* mapping data kedalam komponen */}
            {this.state.data2.map((data, index) =>
              <Card style={{height: 100, width: 100, backgroundColor: data.color}}>
                <h4>{data.color}</h4>
              </Card>
            )}
            </GridList>    
          </div>
            
        )}
      </Container>
      <Container style={styles.Container}>
      <h3>Filter</h3>
        <Box style={{padding: 10, backgroundColor: 'gray', marginBottom: 10}}>
          <h4 style={{marginLeft: 10, marginTop: 5 ,marginRight: 10}}>Darker Disable</h4>
          <Switch
          // memanggil fungsi filter darker
            onChange={() => this.filterDarker()}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'red'}}>Red</h4>
          <Switch
          // memanggil fungsi filter warna
            onChange={() => this.filterColor('red')}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'green'}}>Green</h4>
          <Switch
            onChange={() => this.filterColor('green')}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'yellow'}}>Yellow</h4>
          <Switch
            onChange={() => this.filterColor('yellow')}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'blue'}}>Blue</h4>
          <Switch
            onChange={() => this.filterColor('blue')}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'brown'}}>Brown</h4>
          <Switch
            onChange={() => this.filterColor('brown')}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'gray'}}>Gray</h4>
          <Switch
            onChange={() => this.filterColor('gray')}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'purple'}}>Purple</h4>
          <Switch
            onChange={() => this.filterColor('purple')}
          />
        </Box>
        <Box style={styles.SwitchBox}>
          <h4 style={{color: 'pink'}}>Pink</h4>
          <Switch
            onChange={() => this.filterColor('pink')}
          />
        </Box>
      </Container>
      </div>
      
    );
  }
}
export default App;
//style component yang di buat
let styles ={
  Container: {
    marginTop: 20,
    flexDirection: 'row',
    width: '40%',
    height: '100%',
  },
  SwitchBox: {
    padding: 10, 
    backgroundColor: 'gray', 
    marginBottom: 10, 
    width: '50%'
  },
}