const Cash = props => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: ""
  };
  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.86,
      title: "USD"
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.28,
      title: "EUR"
    },
    {
      id: 3,
      name: "pound",
      ratio: 5.05,
      title: "GBP"
    }
  ];

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    const { amount } = this.state;
    const calculations = this.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));

    return (
      <div className="app">
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          PLN
        </label>
        {calculations}
      </div>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
