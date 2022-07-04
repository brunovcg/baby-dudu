import Button from "../../../button";
import { useContext, useCallback } from "react";
import { CardContext } from "../../../../providers/card";
import {capitalize } from "../../../../utils"

function ModalProductListButtons() {
  const {
    name,
    link,
    img,
    price,
    category,
    setName,
    setLink,
    setImg,
    setPrice,
    setCategory,
    addCard,
  } = useContext(CardContext);

  const modalCheck = useCallback(() => {
    let error = false;
    if (!name.data) {
      setName({
        data: "",
        error: "Esse campo é obrigatorio",
      });
      error = true;
    }
    if (!link.data) {
      setLink({
        data: "",
        error: "Esse campo é obrigatorio",
      });
      error = true;
    }
    if (!img.data) {
      setImg({
        data: "",
        error: "Esse campo é obrigatorio",
      });
      error = true;
    }
    if (!price.data) {
      setPrice({
        data: "",
        error: "Esse campo é obrigatorio",
      });
      error = true;
    }
    if (!category.data) {
      setCategory({
        data: "",
        error: "Esse campo é obrigatorio",
      });
      error = true;
    }
    return error;
  }, [
    name.data,
    link.data,
    img.data,
    price.data,
    category.data,
    setName,
    setLink,
    setImg,
    setPrice,
    setCategory,
  ]);

  const handleClick = () => {
    const payload = {
      name: capitalize(name.data),
      category: capitalize(category.data),
      link: link.data,
      img: img.data,
      price: price.data,
      status: false,
      message: "",
      person: "",
    };
    let error = modalCheck();

    if (error) {
      return;
    }
    addCard(payload);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        backgroundColor="var(--green)"
        size="large"
      >
        Adicionar
      </Button>
    </div>
  );
}

export default ModalProductListButtons;
