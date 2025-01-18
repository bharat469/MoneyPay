import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import BellWrapperIcon from "../assests/images/svgWrappers/bell.wrapper";
import VerticalDotWrapperIcon from "../assests/images/svgWrappers/verticalDots.wrapper";
import BikeWrapperIcon from "../assests/images/svgWrappers/bike.wrapper";
import BadgeWrapperIcon from "../assests/images/svgWrappers/badge.wrapper";
import LocationWrapperIcon from "../assests/images/svgWrappers/location.wrapper";
import MagnifyingGlassWrapperIcon from "../assests/images/svgWrappers/magnifyingGlass.wrapper";
import MicrophoneSVGWrapperIcon from "../assests/images/svgWrappers/mickrophone.wrapper";
import TabAddOutlet from "../assests/images/svgWrappers/tabAddOutlet.wrapper";
import TabHome from "../assests/images/svgWrappers/tabHome.wrapper";
import TabMore from "../assests/images/svgWrappers/tabMore.wrapper";
import TabVisitPlan from "../assests/images/svgWrappers/tabVisitPlan.wrapper";
import FilterIcon from "../assests/images/svg/filter.svg";
import BarCodeWrapperIcon from "../assests/images/svgWrappers/barcode.wrapper";
import CrossWrapperIcon from "../assests/images/svgWrappers/cross.wrapper";
import TickWrapperIcon from "../assests/images/svgWrappers/tick.wrapper";
import QRWrapperIcon from "../assests/images/svgWrappers/qr.wrapper";
import { COLORS } from "../utils/constantHelper";
import HighlightRectangleWrapperIcon from "../assests/images/svgWrappers/highlightRectangle.wrapper";
import GroupDotWrapperIcon from "../assests/images/svgWrappers/groupDot.wrapper";
import PhoneWrapperIcon from "../assests/images/svgWrappers/phone.wrapper";
import OrderRightArrow from "../assests/images/svg/order_right_arrow.svg";
import NotificationIconWrapper from "../assests/images/svgWrappers/notification.wrapper";
import PopularSearchIconWrapper from "../assests/images/svgWrappers/popularSearches.wrapper";
import CallIcon from "../assests/images/svg/Call.svg";
import Headphone from "../assests/images/svg/headphone.svg";
// import Camera from "../assests/images/svg/Camera.svg";
import RightArrowIcon from "../assests/images/svgWrappers/rightArrow.wrapper";
import DrawerLocationWrapperIcon from "../assests/images/svgWrappers/drawerLocation.wrapper";
import DrawerShieldWrapperIcon from "../assests/images/svgWrappers/drawerShield.wrapper";
import DrawerAboutWrapperIcon from "../assests/images/svgWrappers/drawerAbout.wrapper";
import DrawerHeadphoneWrapperIcon from "../assests/images/svgWrappers/drawerHeadphone.wrapper";
import DrawerLockWrapperIcon from "../assests/images/svgWrappers/drawerLock.wrapper";
import DrawerSettingWrapperIcon from "../assests/images/svgWrappers/drawerSetting.wrapper";
import DrawerVersionWrapperIcon from "../assests/images/svgWrappers/drawerVersion.wrapper";
import CircularTickWrapperIcon from "../assests/images/svgWrappers/circularTick.wrapper";
import MenuWrapperIcon from "../assests/images/svgWrappers/menu.wrapper";
import ListCheckWrapperIcon from "./../assests/images/svgWrappers/listCheck.wrapper";
import GoBackWrapperIcon from "./../assests/images/svgWrappers/goBack.wrapper";
import WaterBottle from "../assests/images/svg/waterBottle.svg";
import LeftArrow from "../assests/images/svg/leftArrow.svg";
import ArrowRight from "../assests/images/svg/arrowRight.svg";
import InfoIcon from "../assests/images/svg/info.svg";
import InfoWrapperIcon from "../assests/images/svgWrappers/info.wrapper";
import LoadProductWrapperIcon from "../assests/images/svgWrappers/loadproduct.wrapper";
import UNLoadProductWrapperIcon from "../assests/images/svgWrappers/unloadproduct.wrapper";
import CalnderWrapperIcon from "../assests/images/svgWrappers/calender.wrapper";
import OutstandingWrapperIcon from "../assests/images/svgWrappers/outstanding.wrapper";
import CashWrapperIcon from "../assests/images/svgWrappers/cash.wrapper";
import NetBankingWrapperIcon from "../assests/images/svgWrappers/netBanking.wrapper";
import CreditCardWrapperIcon from "../assests/images/svgWrappers/creditCard.wrapper";
import UPIWrapperIcon from "../assests/images/svgWrappers/upi.wrapper";
import MoneyLineWrapperIcon from "../assests/images/svgWrappers/moneyline.wrapper";
import GooglePayUPIWrapperIcon from "../assests/images/svgWrappers/googlePayUpi.wrapper";
import PhonePayUPIWrapperIcon from "../assests/images/svgWrappers/phonePayUpi.wrapper";
import PaytmUPIWrapperIcon from "../assests/images/svgWrappers/paytmPayUpi.wrapper";
import BhemUPIWrapperIcon from "../assests/images/svgWrappers/bhemUpi.wrapper";
import ExchangeFunds from "../assests/images/svg/exchangeFunds.svg";
import CaptureLocationWrapperIcon from "../assests/images/svgWrappers/captureLocation.wrapper";
import MapLocationWrapperIcon from "../assests/images/svgWrappers/maplocation.wrapper";
import AxisBankIcon from "../assests/images/svg/Bank/AXIS.svg";
import AuBankIcon from "../assests/images/svg/Bank/AU.svg";
import BarodaBankIcon from "../assests/images/svg/Bank/baroda.svg";
import AvatarIcon from "../assests/images/svg/Avatar.svg";
import CosmosBankIcon from "../assests/images/svg/Bank/cosmos.svg";
import HdfcBankIcon from "../assests/images/svg/Bank/hdfc.svg";
import IciciBankIcon from "../assests/images/svg/Bank/icici.svg";
import IDFCBankIcon from "../assests/images/svg/Bank/IDFC.svg";
import KotakBankIcon from "../assests/images/svg/Bank/KOTAK.svg";
import PaymentIcon from "../assests/images/svg/payment.svg";
import DocumentIcon from "../assests/images/svg/document.svg";
import SbiBankIcon from "../assests/images/svg/Bank/sbi.svg";
import VerticalLine from "../assests/images/svg/lineVertical.svg";
import AddInventoryIcon from "../assests/images/svgWrappers/tabInventory.wrapper";
import AddPreOrderIcon from "../assests/images/svgWrappers/tabPreOrder.wrapper";
import MapExpandWrapperIcon from "../assests/images/svgWrappers/mapExpand.wrapper";
import MapNavigationWrapperIcon from "./../assests/images/svgWrappers/mapNavigation.wrapper";
import AddWrapperIcon from "../assests/images/svgWrappers/add.wrapper";
import DownWardsArrowIcon from "../assests/images/svgWrappers/downWardsArrowIcon.wrapper";
import UpWardsArrowIcon from "../assests/images/svgWrappers/upWardsArrowIcon.wrapper";
import PhoneIconWrapperIcon from "../assests/images/svgWrappers/phoneIcon.wrapper";
import WideCameraWrapperIcon from "../assests/images/svgWrappers/widecamera.wrapper";
import PenWrapperIcon from "../assests/images/svgWrappers/pen.wrapper";
// import RedPhoneIcon from '../assests/images/svg/redPhone.svg';
import OTPMsg from "../assests/images/svgWrappers/otpmsg.wrapper";
import RedPhoneIcon from "../assests/images/svg/redPhone.svg";
import PdfIcon from "../assests/images/svg/pdf.svg";
import CokeCan from "../assests/images/svg/cokeCan.svg";
import CokeBottle from "../assests/images/svg/cokeBottle.svg";
import AddOutletIcon from "../assests/images/svgWrappers/tabAddOutlet.wrapper";
import NotePadIcon from "../assests/images/svgWrappers/notePad.wrapper";
import LoadIcon from "../assests/images/svg/loadIcon.svg";
import CallIconNew from "../assests/images/svg/Call_icon.svg";
import TabMyPerformanceWrapperIcon from "../assests/images/svgWrappers/tabMyPerformance.wrapper";
import RedFinance from "../assests/images/svg/RedFinance.svg";
import RedCalender from "../assests/images/svg/redIcon/redCalender.svg";
import RedOrderTarget from "../assests/images/svg/redIcon/target.svg";
import RedTime from "../assests/images/svg/redIcon/redTime.svg";
// import RedLocation from "../assests/images/svg/redIcon/redLocation.svg";
import RightRedIcon from "../assests/images/svg/redIcon/rightRedIcon.svg";
import PencilProduct from "../assests/images/svg/pencilProduct.svg";
import ThumbDown from "../assests/images/svg/redIcon/thumb-down.svg";
import ThumbUp from "../assests/images/svg/redIcon/thumb-up.svg";
import AiIcon from "../assests/images/svg/redIcon/ai.svg";
import OfferIcon from "../assests/images/svg/offer.svg";
import Delete from "../assests/images/svg/redIcon/delete.svg";
import RedStarIcon from "../assests/images/svg/redIcon/redStar.svg";
import InformationIcon from "../assests/images/svg/redIcon/IiconRed.svg";
import HutIcon from "./../assests/images/svgWrappers/hutIcon.wrapper";
import PDFWrapperIcon from "../assests/images/svgWrappers/pdf.wrapper";
import ProfitWrapperIcon from "../assests/images/svgWrappers/profit.wrapper";
import LossWrapperIcon from "../assests/images/svgWrappers/loss.wrapper";
import MyAttendenceIcon from "../assests/images/svgWrappers/attendence.wrapper";
import RedLeftIcon from "../assests/images/svg/redIcon/leftRedArrow.svg";
import RedRightIcon from "../assests/images/svg/redIcon/rightRedArrow.svg";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import TakeOrderIcon from "../assests/images/svgWrappers/takeOrder.wrapper";
import OutletAddIcon from "../assests/images/svgWrappers/outletAdd.wrapper";
import Logo from "../assests/images/svgWrappers/dealermatix.wrapper";
import RedLocationIcon from "../assests/images/svgWrappers/redLocation.wrapper";
import CalenderWrapperIcon from "../assests/images/svgWrappers/calender.wrapper";
import TimeIcon from "../assests/images/svgWrappers/time.wrapper";
import TargetIcon from "../assests/images/svgWrappers/target.wrapper";
import ColorPhoneIcon from "../assests/images/svgWrappers/colorPhone.wrapper";
import CameraIcon from "../assests/images/svgWrappers/camera.wrapper";
import GreenCart from '../assests/images/svgWrappers/greenCart.wrapper'
import ArrowLeftNew from '../assests/images/svg/arrowLeftNew.svg'
import ArrowRightNew from '../assests/images/svg/arrowRightNew.svg';
import WhiteCart from '../assests/images/svgWrappers/whiteCart.wrapper'
import RedCart from '../assests/images/svgWrappers/redCart.wrapper'
import HomeIcon from '../assests/images/svgWrappers/homeIcon.wrapper'
import CameraSelfie from "../assests/images/svgWrappers/camera_selfie.wrapper";
 
const iconComponents = {
  camera_selfie:<CameraSelfie/>,
  bell: <BellWrapperIcon />,
  user: <Icon name={"user-circle"} />,
  vertical_dots: <VerticalDotWrapperIcon />,
  bike: <BikeWrapperIcon />,
  badge: <BadgeWrapperIcon />,
  // right_arrow: <Icon name='chevron-right' />,
  location: <LocationWrapperIcon />,
  search: <Icon name="magnifying-glass" />,
  microphone: <MicrophoneSVGWrapperIcon />,
  tab_home: <TabHome />,
  tab_more: <TabMore />,
  tab_visit_plan: <TabVisitPlan />,
  tab_add_outlet: <TabAddOutlet />,
  tab_inventory: <AddInventoryIcon />,
  tab_pre_order: <AddPreOrderIcon />,
  tab_performance: <TabMyPerformanceWrapperIcon />,
  tab_attendance: <MyAttendenceIcon />,
  tab_MyOrders:<TabMyPerformanceWrapperIcon />,
  tab_Resource:<AddPreOrderIcon />,
  tab_Items:<AddInventoryIcon />,
  tab_Home:<TabHome />,
  tab_Contacts: <TabMyPerformanceWrapperIcon />,
  tab_Accounts: <MyAttendenceIcon />,
  tab_Outlets: <MyAttendenceIcon />,
  tab_More:<TabMore />,
  tab_VisitPlans:<TabVisitPlan />,
  tab_AddOutlet:<TabAddOutlet />,
 
  filter: <FilterIcon />,
  up_arrow: <Icon name="chevron-up" color={COLORS?.black} />,
  redLocation: <RedLocationIcon />,
  down_arrow: <Icon name="chevron-down" color={COLORS?.black} />,
  Up_Word_Arrow: <UpWardsArrowIcon />,
  Down_Word_Arrow: <DownWardsArrowIcon />,
  arrow_right: <ArrowRight />,
  left_arrow: <LeftArrow />,
  barcode: <BarCodeWrapperIcon />,
  clock_rotate_left: <Icon name="clock-rotate-left" color={COLORS?.black} />,
  clock: <Icon name="clock" color={COLORS?.black} />,
  cross: <CrossWrapperIcon />,
  tick: <TickWrapperIcon />,
  CircularTick: <CircularTickWrapperIcon />,
  circle_check: <Icon name="circle-check" solid />,
  qr: <QRWrapperIcon />,
  plus: <Icon name="plus" />,
  minus: <Icon name="minus" />,
  highLightRectangle: <HighlightRectangleWrapperIcon />,
  groupDot: <GroupDotWrapperIcon />,
  phone: <PhoneWrapperIcon />,
  phoneIcon: <PhoneIconWrapperIcon />,
  order_right_arrow: <OrderRightArrow />,
  notification: <NotificationIconWrapper height={30} width={30} />,
  popular_search: <PopularSearchIconWrapper />,
  call: <CallIcon />,
  headphone: <Headphone />,
  camera: <CameraIcon />,
  right_arrow: <RightArrowIcon />,
  drawer_location: <DrawerLocationWrapperIcon />,
  drawer_sield: <DrawerShieldWrapperIcon />,
  drawer_about: <DrawerAboutWrapperIcon />,
  drawer_lock: <DrawerLockWrapperIcon />,
  drawer_Version: <DrawerVersionWrapperIcon />,
  drawer_hearphone: <DrawerHeadphoneWrapperIcon />,
  drawer_setting: <DrawerSettingWrapperIcon />,
  menu: <MenuWrapperIcon />,
  listCheck: <ListCheckWrapperIcon />,
  goBack: <GoBackWrapperIcon />,
  water_bottle: <WaterBottle />,
  info: <InfoIcon />,
  info: <InfoWrapperIcon />,
  unloadproduct: <UNLoadProductWrapperIcon />,
  loadproduct: <LoadProductWrapperIcon />,
  payment_date_calender: <CalnderWrapperIcon />,
  outstanding: <OutstandingWrapperIcon />,
  cash: <CashWrapperIcon />,
  credit_card: <CreditCardWrapperIcon />,
  net_banking: <NetBankingWrapperIcon />,
  money_line: <MoneyLineWrapperIcon />,
  upi: <UPIWrapperIcon />,
  googlePayUPI: <GooglePayUPIWrapperIcon />,
  phonePayUPI: <PhonePayUPIWrapperIcon />,
  paytmUPI: <PaytmUPIWrapperIcon />,
  bhemUPI: <BhemUPIWrapperIcon />,
  exchangeFunds: <ExchangeFunds />,
  capture_location: <CaptureLocationWrapperIcon />,
  map_location: <MapLocationWrapperIcon />,
  axisBank: <AxisBankIcon />,
  auBank: <AuBankIcon />,
  barodaBank: <BarodaBankIcon />,
  cosmosBank: <CosmosBankIcon />,
  hdfcBank: <HdfcBankIcon />,
  iciciBank: <IciciBankIcon />,
  idfcBank: <IDFCBankIcon />,
  kotakBank: <KotakBankIcon />,
  sbiBank: <SbiBankIcon />,
  map_navigation: <MapNavigationWrapperIcon />,
  map_expand: <MapExpandWrapperIcon />,
  add_icon: <AddWrapperIcon />,
  verticalLine: <VerticalLine />,
  wide_camera: <WideCameraWrapperIcon />,
  pen: <PenWrapperIcon />,
  avatar: <AvatarIcon />,
  payment: <PaymentIcon />,
  document: <DocumentIcon />,
  redPhone: <RedPhoneIcon />,
  colorPhone: <ColorPhoneIcon />,
  otp_msg: <OTPMsg />,
  pdfIcon: <PdfIcon />,
  cokeBottle: <CokeBottle />,
  cokeCan: <CokeCan />,
  add_outlet: <AddOutletIcon />,
  note_pad: <NotePadIcon />,
  load_icon: <LoadIcon />,
  call_icon: <CallIconNew />,
  finance: <RedFinance />,
  orderTarget: <TargetIcon />,
  redCalender: <RedCalender />,
  calender:<CalenderWrapperIcon/>,
  redTime: <RedTime />,
  time:<TimeIcon />,
  rightRedIcon: <RightRedIcon />,
  pencilProduct: <PencilProduct />,
  thumbDown: <ThumbDown />,
  thumbUp: <ThumbUp />,
  aiIcon: <AiIcon />,
  offer: <OfferIcon />,
  delete: <Delete />,
  information_icon: <InformationIcon />,
  redStar_icon: <RedStarIcon />,
  hut_icon: <HutIcon />,
  pdfIcon: <PDFWrapperIcon />,
  redLeftIcon: <RedLeftIcon />,
  redRightIcon: <RedRightIcon />,
  profit: <ProfitWrapperIcon />,
  loss: <LossWrapperIcon />,
  take_order: <TakeOrderIcon/>,
  outlet_add: <OutletAddIcon/>,
  dealermatix_logo: <Logo/>,
  greenCart:<GreenCart/>,
  leftArrowNew:<ArrowLeftNew/>,
  rightArrowNew:<ArrowRightNew/>,
  whiteCart:<WhiteCart/>,
  redCart:<RedCart/>,
  homeIcon:<HomeIcon/>,
};
 
function getIconComponent(icon, color, size, containerFill) {
  const iconComponent = iconComponents[icon]; // Retrieve icon component from iconComponents object
// console.log(JSON.stringify(iconComponent),'ICON COMPONENT IS ')
  // if (iconComponent && iconComponent.key !== null ) {
    if (iconComponent  ) {
    // If icon component exists, set color and size props and return it
    return React.cloneElement(iconComponent, {
      fill: color,
      size: size,
      height: size,
      width: size,
      color: color,
      containerFill: containerFill,
    });
  } else {
    return (
      <Icon
        name={icon}
        size={size}
        color={color}
        containerFill={containerFill}
      />
    ); // Handle unknown icon case
  }
}
 
const MySvgComponent = ({
makePressable = true,
  containerFill = "white",
  iconSize = 24,
  iconName = "user",
  iconColor = COLORS?.black,
  style,
  handelIconClick = () => {},
}) => {
  return (
    <TouchableNativeFeedback
      onPress={handelIconClick}
      disabled={!makePressable}
    >
      <View
        style={[styles.container, style, { width: iconSize, height: iconSize }]}
      >
        {getIconComponent(iconName, iconColor, iconSize, containerFill)}
      </View>
    </TouchableNativeFeedback>
  );
};
 
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
 
export default MySvgComponent;