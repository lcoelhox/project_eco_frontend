const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "5px",
        margin: "5px auto",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src="src/assets/img_prefeitura.png"
        alt="Apoio Prefeitura de Vila Velha"
        style={{
          width: "40%",
          maxWidth: "200px",
          height: "auto",
        }}
      />
      <img
        src="src/assets/img_multivix_br.png"
        alt="Apoio Multivix"
        style={{
          width: "40%",
          maxWidth: "200px",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Footer;
