import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useLocomotiveScroll } from "react-locomotive-scroll";

import { TAction } from ".";

export default function useNavigationRouting(handleAsideStates: React.Dispatch<TAction>) {
  const currentRoute = usePathname()
  const { scroll } = useLocomotiveScroll();
  const router = useRouter()
  const [navigation, setNavigationValues] = useState([
    { title: "About", onClick: () => { scroll.scrollTo("#about") } },
    { title: "Projects", onClick: () => { scroll.scrollTo("#projects") } },
    { title: "Skills", onClick: () => { scroll.scrollTo("#skills") } },
    { title: "Contact", onClick: () => { scroll.scrollTo("#contact") } },
  ]);
  useEffect(() => {
    function handleRoutingTravels() {
      if (currentRoute.includes("/repository")) {
        setNavigationValues([{ title: "Home", onClick: () => { router.push("/") } }])
      } else {
        setNavigationValues([
          { title: "About", onClick: () => { scroll.scrollTo("#about") } },
          { title: "Projects", onClick: () => { scroll.scrollTo("#projects") } },
          { title: "Skills", onClick: () => { scroll.scrollTo("#skills") } },
          { title: "Contact", onClick: () => { scroll.scrollTo("#contact") } },
        ])
      }
      handleAsideStates({ type: "set", payload: false })
    }

    handleRoutingTravels()
  }, [currentRoute, scroll])

  return navigation
}