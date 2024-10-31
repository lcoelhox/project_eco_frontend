import imgPrefeitura from "../../public/img_prefeitura.png";
import imgMulti from "../../public/img_multivix_br.png";

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
        src={imgPrefeitura}
        alt="Apoio Prefeitura de Vila Velha"
        style={{
          width: "40%",
          maxWidth: "200px",
          height: "auto",
        }}
      />
      <img
        src={imgMulti}
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
