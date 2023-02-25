import prisma from "../db";

export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

export const getOneProduct = async (req, res) => {
  const id = req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsTo: req.user.id,
    },
  });

  res.json({ data: product });
};
