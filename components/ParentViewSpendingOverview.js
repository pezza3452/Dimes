import React, { useContext, useEffect, useState } from 'react';
import { ParentContext } from '../ParentContext';

import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../myAssets/theme';

import chart from '../myAssets/images/barchart.png';

export default function ParentViewSpendingOverview({}) {
  const { state } = useContext(ParentContext);
  const [weekSpending, setWeekSpending] = useState(0);

  useEffect(() => {
    const totalWeekSpending = state.transactions.reduce((acc, transaction) => {
      if (transaction.amount < 0) {
        return acc - transaction.amount;
      } else {
        return acc;
      }
    }, 0);
    setWeekSpending(totalWeekSpending);
  }, [state.transactions]);

  return (
    <View>
      <TouchableOpacity style={styles.box}>
        <View>
          <Image source={chart} style={styles.chart} />
          <Text style={styles.balanceTitle}>Total spending this week:</Text>
        </View>
        <View>
          <Text style={styles.balance}>£ {weekSpending}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    margin: 10,
    height: 200,
    backgroundColor: colors.purple,
  },
  balanceTitle: {
    color: colors.white,
    padding: 10,
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Raleway-Regular',
  },
  balance: {
    marginBottom: 50,
    marginLeft: 20,
    fontSize: 40,
    fontFamily: 'Raleway-Regular',
    color: colors.white,
  },
  itemsStyleMargin: {
    margin: 10,
  },
  chart: {
    position: 'absolute',
    width: 250,
    height: 250,
    marginLeft: 150,
  },
});
