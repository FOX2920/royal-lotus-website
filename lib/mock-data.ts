// Mock data for testing product table
export const mockProducts = [
  {
    idNhanh: "SP001",
    name: "Giả da PVC cao cấp cho ghế ô tô",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 86400, // 1 ngày trước
    inventory: {
      remain: 150,
      holding: 20,
      available: 130
    }
  },
  {
    idNhanh: "SP002", 
    name: "Giả da PU cho sofa phòng khách",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 172800, // 2 ngày trước
    inventory: {
      remain: 89,
      holding: 15,
      available: 74
    }
  },
  {
    idNhanh: "SP003",
    name: "Giả da Microfiber cho túi xách",
    unit: "m²", 
    updatedAt: Math.floor(Date.now() / 1000) - 259200, // 3 ngày trước
    inventory: {
      remain: 245,
      holding: 35,
      available: 210
    }
  },
  {
    idNhanh: "SP004",
    name: "Giả da Nappa cho giày cao cấp",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 432000, // 5 ngày trước
    inventory: {
      remain: 67,
      holding: 8,
      available: 59
    }
  },
  {
    idNhanh: "SP005",
    name: "Giả da Saffiano cho vali du lịch",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 518400, // 6 ngày trước
    inventory: {
      remain: 123,
      holding: 25,
      available: 98
    }
  },
  {
    idNhanh: "SP006",
    name: "Giả da Buffalo cho ghế văn phòng",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 604800, // 7 ngày trước
    inventory: {
      remain: 78,
      holding: 12,
      available: 66
    }
  },
  {
    idNhanh: "SP007",
    name: "Giả da Vintage cho đồ nội thất",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 691200, // 8 ngày trước
    inventory: {
      remain: 156,
      holding: 18,
      available: 138
    }
  },
  {
    idNhanh: "SP008",
    name: "Giả da Carbon cho ô tô thể thao",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 777600, // 9 ngày trước
    inventory: {
      remain: 45,
      holding: 5,
      available: 40
    }
  },
  {
    idNhanh: "SP009",
    name: "Giả da Alcantara cho nội thất sang trọng",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 864000, // 10 ngày trước
    inventory: {
      remain: 92,
      holding: 10,
      available: 82
    }
  },
  {
    idNhanh: "SP010",
    name: "Giả da Cross Pattern cho balo học sinh",
    unit: "m²",
    updatedAt: Math.floor(Date.now() / 1000) - 1296000, // 15 ngày trước
    inventory: {
      remain: 234,
      holding: 40,
      available: 194
    }
  }
];

export const mockApiResponse = {
  code: 1,
  messages: [],
  data: {
    products: mockProducts.reduce((acc, product) => {
      acc[product.idNhanh] = product;
      return acc;
    }, {} as Record<string, any>),
    totalPages: 1,
    currentPage: 1
  }
};
