const ActionsTable = ({ renderVender, onSell, onBuy, data }) => {
  const RenderItem = () => {
    return data.map((item, i) => (
      <tr className="rowItem">
        <th className="acao"> {item.name}</th>
        <th className="quantidade">{item.quantidade}</th>
        <th className="preco">{item.preço}</th>
        <th className="negociar">
          <div className="buttonsContainer">
            <button className="buttonNegociar" onClick={() => onBuy(item)}>
              COMPRAR
            </button>

            {renderVender ? (
              <button className="buttonNegociar" onClick={() => onSell(item)}>
                VENDER
              </button>
            ) : (
              <></>
            )}
          </div>
        </th>
      </tr>
    ));
  };

  return (
    <table className="table">
      {renderVender ? (
        <h3 className="tableTittle"> Suas ações </h3>
      ) : (
        <h3 className="tableTittle">Ações disponíveis</h3>
      )}
      <tr className="rowHeader">
        <th className="tableHeader">Ação</th>
        <th className="tableHeader">Quantidade</th>
        <th className="tableHeader">Preço</th>
        <th className="tableHeader">Negociar</th>
      </tr>
      <hr></hr>
      <RenderItem />
    </table>
  );
};
export default ActionsTable;
