// import React, {Component} from 'react';
// import {StyleSheet, View, Button, Text} from 'react-native';

// class App extends Component {
//   state = {count: 0};
//   decrementCount() {
//     let {count} = this.state;
//     if (count > 0) {
//       count--;
//     }
//     this.setState({
//       count,
//     });
//   }
//   incrementCount() {
//     let {count} = this.state;
//     count++;
//     this.setState({
//       count,
//     });
//   }
//   render() {
//     const {count} = this.state;
//     return (
//       <View styles={styles.container}>
//         <Button title="increment" onPress={() => this.incrementCount()} />
//         <Text>{count}</Text>
//         <Button title="decrement" onPress={() => this.decrementCount()} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from './actions/counts';
import {bindActionCreators} from 'redux';

class App extends Component {
  decrementCount() {
    let {count, actions} = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let {count, actions} = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const {count} = this.props;
    return (
      <View styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign({}, changeCount);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)