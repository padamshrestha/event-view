# ng new event-view--prefix ev -sn
#####################
echo *** work on the shared folder ***
ng g cl shared/config
rm src/app/shared/config.spec.ts
ng g s shared/entity
ng g s shared/exception
ng g p shared/init-caps
ng g s shared/message
ng g c shared/filter-text
ng g s shared/filter-text/filter-text
ng g c shared/modal
ng g s shared/modal/modal
ng g c shared/nav
ng g cl shared/rxjs-operators -ns
rm src/app/shared/rxjs-operators.spec.ts
ng g c shared/spinner
ng g s shared/spinner/spinner
mkdir -p src/app/shared/speaker-data
ng g s shared/speaker-data/speaker
ng g cl shared/speaker-data/speaker model
ng g c shared/toast
ng g s shared/toast/toast
#####################
echo *** create dashboard ***
ng g r dashboard
ng g c +dashboard/shared/dashboard-button
#####################
echo *** create sessions ***
ng g r sessions
ng g r +sessions/session-list
ng g r +sessions/session
ng g c +sessions/shared/session-button
ng g s +sessions/shared/session
ng g cl +sessions/shared/session model
#####################
echo *** create speakers ***
ng g r speakers
ng g r +speakers/speaker-list
ng g r +speakers/speaker
ng g c +speakers/shared/speaker-button
ng g p +speakers/shared/sort-speakers
#####################
mkdir -p src/api
ng g s ./src/api/in-memory-store
