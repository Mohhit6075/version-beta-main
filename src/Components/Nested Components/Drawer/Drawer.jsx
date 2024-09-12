import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function DrawerBasic() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <img src="/Images/menu.svg" alt="" className="w-8 mb-1" onClick={toggleDrawer(true)} />
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="left"
        color="neutral"
        invertedColors={true}
        size="sm"
        variant="soft"
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            backgroundColor: "#111111",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="w-[80%] mt-4 scale-125 flex justify-end items-center">
            <KeyboardArrowRightIcon
              id="close-icon"
              sx={{
                width:'30px',
                height:'30px',
                backgroundColor: "#ffffff1e",
                borderRadius: "100%",
                color:'#6054aa',
                ":hover":{
                  backgroundColor: "#1e1e20"
                }
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mx-auto mt-10">
            <img src="/Images/Logo.svg" alt="" loading="lazy"/>
          </div>
          <List>
            <div className="flex flex-col items-center font-medium text-[#6054aa] mt-10 text-xl w-full font-['Ubuntu',sans-serif]">
              <a
                href="/"
                className="group w-full h-10 flex justify-center items-center active:bg-[#ffffff1e]"
              >
                Home
              </a>
              <a
                href="#about"
                className="group w-full h-10 flex justify-center items-center active:bg-[#ffffff1e]"
              >
                About
              </a>
              <a
                href="#schedule"
                className="group w-full h-10 flex justify-center items-center active:bg-[#ffffff1e]"
              >
                Schedule
              </a>
              <a
                href="#prizes"
                className="group w-full h-10 flex justify-center items-center active:bg-[#ffffff1e]"
              >
                Prizes
              </a>
              <a
                href="#gallery"
                className="group w-full h-10 flex justify-center items-center active:bg-[#ffffff1e]"
              >
                Gallery
              </a>
              <a
                href="#sponsors"
                className="group w-full h-10 flex justify-center items-center active:bg-[#ffffff1e]"
              >
                Sponsors
              </a>
              <a
                href="#faqs"
                className="group w-full h-10 flex justify-center items-center active:bg-[#ffffff1e]"
              >
                FAQs
              </a>
            </div>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

