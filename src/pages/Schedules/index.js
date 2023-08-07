import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';

import SelectDropdown from 'react-native-select-dropdown'

const DAYS = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado']

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Schedules() {

	const [day, setDay] = useState('')

	const SCHEDULES_DATA = {
		days_of_week: [
			{ exitTime: "4:15:00", locaction: "TOMAZELLI / FAG / UNIVERSIDADE FEDERAL / THIAGO VILA PÁSCOA / VILA ESPERANÇA / FACH II" },
			{ exitTime: "06:35:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "06:55:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "07:20:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "07:30:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "08:15:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "09:10:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "10:10:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "11:15:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "12:00:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "13:15:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "13:40:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "14:30:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "16:25:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "17:35:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "18:05:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "20:15:00", locaction: "PARQUE DAS PALMEIRAS / UNIVERSIDADE FEDERAL." },
			{ exitTime: "21:15:00", locaction: "PARQUE DAS PALMEIRAS / UNIVERSIDADE FEDERAL." },
			{ exitTime: "21:45:00", locaction: "PARQUE DAS PALMEIRAS / UNIVERSIDADE FEDERAL." }
		],
		weekend: [
			{ exitTime: "06:30:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "07:00:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "09:15:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "11:15:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "12:05:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "13:10:00", locaction: "UNIVERSIDADE FEDERAL" },
			{ exitTime: "18:10:00", locaction: "UNIVERSIDADE FEDERAL" }
		]
	}

	const checkDaySchedule = () => {
		if (day != '') {
            // Como todos os dias da semana possuem o mesmo horário, eu poderia optar por separar isso 
			// em "Dias da semana" e "Finais de Semana", porém, por uma questão de UX,
			// creio que é melhor fazer com que o usuário possa escolher o dia desejado.
            if (day === 'Segunda' || day === 'Terça' || day === 'Quarta' || day === 'Quinta' || day === 'Sexta') {
				return SCHEDULES_DATA.days_of_week.map((item, index) => 
					{return showDaySchedule(item, index)})
			}
			else {
				return SCHEDULES_DATA.weekend.map((item, index) => 
					{return showDaySchedule(item, index)})
			}
		}
	}

	const showDaySchedule = (day, index) => {

		const { exitTime, locaction} = day


		return (
			<View key={index} style={styles.viewInfo}>
				<Text style={styles.exitTimeText}>{exitTime}</Text>
				<Text style={styles.locationText}>{locaction}</Text>
			</View>
		)
	}

	const showDayScheduelView = () => {
		if(day != '') {
			return (
				<View style={styles.schedulesView}>
					<Text style={styles.schedulesTitle}> Horários: </Text>
					{checkDaySchedule()}
				</View>
			)
		}
	}

	const checkIfDayExists = () => {
		if(day == '') {
			return (
				<View style={styles.whitoutDayView}>
					<Text style={styles.whitoutDayText}>
						Selecione um dia da semana para exibir os resultados!
					</Text>
				</View>
			)
		}
	}

	const showMoreInfo = () => {
		if(day != '') {
			return (
				<View style={styles.seeMoreInfoView}>
					<Text> Qualquer dúvida, acesse:</Text>
					<Text style={styles.seeMoreInfoText}
						onPress={() => Linking.openURL('http://horarios.autoviacao.com/')}>
						http://horarios.autoviacao.com/
					</Text>
				</View>
			)
		}
	}

	return (
		<View>
			<ScrollView>
				<View>
					<View style={styles.mainInfoViewContent}>
						<SelectDropdown
							data={DAYS}
							buttonStyle={styles.dropdownSelect}
							defaultButtonText='Selecione um dia: '
							renderDropdownIcon={isOpened => {
								return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
							}}
							onSelect={(selectedItem) => {
								setDay(selectedItem)
							}}
						/>
						<Text style={styles.calendarIconText}>
							<FontAwesome name='calendar' color={'black'} size={18} />
						</Text>
					</View>
					{showDayScheduelView()}
					{showMoreInfo()}
				</View>
			</ScrollView>
			{checkIfDayExists()}
		</View>
	);
}

const styles = StyleSheet.create({
    viewInfo: {
		borderBottomWidth: 2, 
		padding: 3, 
		gap: 10, 
		flexDirection: 'row', 
		width: '90%', 
		maxHeight: 80, 
		alignItems: 'center', 
		justifyContent: 'space-between'
	},
	dropdownSelect: {
		width: '76%', 
		backgroundColor: '#F8F8F8', 
		elevation: 5, 
		borderBottomColor: 'black', 
		borderBottomWidth: 1
	},
	mainInfoViewContent: {
		paddingTop: 15,
		display: 'flex', 
		flexDirection: 'row', 
		justifyContent: 'space-around'
	},
	whitoutDayView: {
		height: '90%', 
		justifyContent: 'center'
	},
	whitoutDayText: {
		textAlign: 'center', 
		fontSize: 16, 
		fontWeight: '300'
	},
	exitTimeText: {
		fontSize: 12, 
		paddingVertical: 7
	},
	locationText: {
        fontSize: 12, 
		fontWeight: '300', 
		flex: 1, 
		flexWrap: 'wrap', 
		textAlign: 'right'
    },
	seeMoreInfoView: {
		alignItems: 'center', 
		paddingBottom: 20
	},
	seeMoreInfoText: {
		color: 'blue'
	},
	calendarIconText: {
        paddingVertical: 15
    },
	schedulesView: {
		alignItems: 'center', 
		backgroundColor: '#F8F8F8', 
		borderRadius: 5, 
		elevation: 3, 
		margin: 20, 
		padding: 5
	},
	schedulesTitle: {
		textAlign: 'center', 
		fontSize: 20, 
		padding: 10
	}
})