import React, { useEffect, useState } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Redux slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { number: 1 },
  reducers: {
    add: (state, action) => {
      state.number += action.payload;
    },
    subtract: (state, action) => {
      state.number -= action.payload;
    },
  },
});

// Tạo Redux store
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default function Redux() {
  // Sử dụng React state thay vì useReducer
  const [state, setState] = useState(store.getState());

  // Lắng nghe sự thay đổi trạng thái từ store
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // Cập nhật trạng thái từ store
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Gửi action ADD đến reducer
            store.dispatch(counterSlice.actions.add(1));
          }}
        >
          <Text>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Gửi action SUBTRACT đến reducer
            store.dispatch(counterSlice.actions.subtract(1));
          }}
        >
          <Text>Subtract</Text>
        </TouchableOpacity>

        {/* Hiển thị giá trị từ Redux store */}
        <Text>{state.counter.number}</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    margin: 10,
  },
});
