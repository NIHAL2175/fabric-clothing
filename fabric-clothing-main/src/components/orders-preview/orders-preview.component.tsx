import { useSelector } from "react-redux";
import {
	selectOrderList,
	selectPaymentDetails,
} from "../../store/orders/orders.selector";
import {
	OrdersType,
	PaymentDetailsType,
} from "../../store/orders/orders.types";
import OrderRow from "../orders-row/orders-row.component";
import {
	
	OrderTable,
	OrdersPreviewContainer,
} from "./orders-preview.styles";

const OrdersPreview = () => {
	const orderList: OrdersType[] = useSelector(selectOrderList);
	const paymentDetails: PaymentDetailsType[] =
		useSelector(selectPaymentDetails);

	return (
		<OrdersPreviewContainer>
			
			
			<div>
				<OrderTable>
					
					<tbody>
						{orderList.map((order: OrdersType, index: number) => {
							const paymentDetail: PaymentDetailsType = paymentDetails[
								index
							] || {
								status: "N/A",
							};
							return (
								<OrderRow
									key={index}
									order={order}
									index={index}
									status={paymentDetail.status}
								/>
							);
						})}
					</tbody>
				</OrderTable>
			</div>
		</OrdersPreviewContainer>
	);
};

export default OrdersPreview;
