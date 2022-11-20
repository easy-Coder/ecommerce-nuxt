export const useProduct = () =>
  useState("product", () => [
    {
      id: 1,
      name: "PlayStation 5",
      caption: "Experience the Adventure you never have.",
      image: "/image/PS5-front-with-dualsense.webp",
    },
    {
      id: 2,
      name: "DualSense Controller",
      caption: "Be in controll of your adventure",
      image: "/image/controller1.png",
    },
    {
      id: 3,
      name: "Oculus VR Headset",
      caption: "Live your own adventure",
      image: "/image/virtual-reality-headset.png",
    },
    {
      id: 4,
      name: "Drone",
      caption: "Live your own adventure",
      image: "/image/drone.png",
    },
  ]);
