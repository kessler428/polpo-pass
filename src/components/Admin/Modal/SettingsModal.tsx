import { itemModal } from "../../../interfaces/InterfacesModal";

export const GirdModalItems = ({ ItemModal, setItemModal }: itemModal) => {
	return (
		<>
			{ItemModal && (
				<div className="bg-red-900">
					<button onClick={setItemModal(false)}>Editar</button>
					<button onClick={setItemModal(false)}>Ver</button>
				</div>
			)}
		</>
	);
};
