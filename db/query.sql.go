// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.14.0
// source: query.sql

package db

import (
	"context"
	"database/sql"
	"time"
)

const addAccessTokenForUser = `-- name: AddAccessTokenForUser :exec
INSERT INTO user_access_tokens(token, user_id) values($1, $2)
`

type AddAccessTokenForUserParams struct {
	Token  string
	UserID string
}

func (q *Queries) AddAccessTokenForUser(ctx context.Context, arg AddAccessTokenForUserParams) error {
	_, err := q.db.ExecContext(ctx, addAccessTokenForUser, arg.Token, arg.UserID)
	return err
}

const addAuthForUser = `-- name: AddAuthForUser :exec
INSERT INTO auth(user_id, token, type) values($1, $2, $3)
`

type AddAuthForUserParams struct {
	UserID string
	Token  string
	Type   string
}

func (q *Queries) AddAuthForUser(ctx context.Context, arg AddAuthForUserParams) error {
	_, err := q.db.ExecContext(ctx, addAuthForUser, arg.UserID, arg.Token, arg.Type)
	return err
}

const addFollower = `-- name: AddFollower :exec
INSERT INTO ap_followers(iri, inbox, request, request_object, name, username, image, approved_at) values($1, $2, $3, $4, $5, $6, $7, $8)
`

type AddFollowerParams struct {
	Iri           string
	Inbox         string
	Request       string
	RequestObject []byte
	Name          sql.NullString
	Username      string
	Image         sql.NullString
	ApprovedAt    sql.NullTime
}

func (q *Queries) AddFollower(ctx context.Context, arg AddFollowerParams) error {
	_, err := q.db.ExecContext(ctx, addFollower,
		arg.Iri,
		arg.Inbox,
		arg.Request,
		arg.RequestObject,
		arg.Name,
		arg.Username,
		arg.Image,
		arg.ApprovedAt,
	)
	return err
}

const addNotification = `-- name: AddNotification :exec
INSERT INTO notifications (channel, destination) VALUES($1, $2)
`

type AddNotificationParams struct {
	Channel     string
	Destination string
}

func (q *Queries) AddNotification(ctx context.Context, arg AddNotificationParams) error {
	_, err := q.db.ExecContext(ctx, addNotification, arg.Channel, arg.Destination)
	return err
}

const addToAcceptedActivities = `-- name: AddToAcceptedActivities :exec
INSERT INTO ap_accepted_activities(iri, actor, type, timestamp) values($1, $2, $3, $4)
`

type AddToAcceptedActivitiesParams struct {
	Iri       string
	Actor     string
	Type      string
	Timestamp time.Time
}

func (q *Queries) AddToAcceptedActivities(ctx context.Context, arg AddToAcceptedActivitiesParams) error {
	_, err := q.db.ExecContext(ctx, addToAcceptedActivities,
		arg.Iri,
		arg.Actor,
		arg.Type,
		arg.Timestamp,
	)
	return err
}

const addToOutbox = `-- name: AddToOutbox :exec
INSERT INTO ap_outbox(iri, value, type, live_notification) values($1, $2, $3, $4)
`

type AddToOutboxParams struct {
	Iri              string
	Value            []byte
	Type             string
	LiveNotification sql.NullBool
}

func (q *Queries) AddToOutbox(ctx context.Context, arg AddToOutboxParams) error {
	_, err := q.db.ExecContext(ctx, addToOutbox,
		arg.Iri,
		arg.Value,
		arg.Type,
		arg.LiveNotification,
	)
	return err
}

const approveFederationFollower = `-- name: ApproveFederationFollower :exec
UPDATE ap_followers SET approved_at = $1, disabled_at = null WHERE iri = $2
`

type ApproveFederationFollowerParams struct {
	ApprovedAt sql.NullTime
	Iri        string
}

func (q *Queries) ApproveFederationFollower(ctx context.Context, arg ApproveFederationFollowerParams) error {
	_, err := q.db.ExecContext(ctx, approveFederationFollower, arg.ApprovedAt, arg.Iri)
	return err
}

const banIPAddress = `-- name: BanIPAddress :exec
INSERT INTO ip_bans(ip_address, notes) values($1, $2)
`

type BanIPAddressParams struct {
	IpAddress string
	Notes     sql.NullString
}

func (q *Queries) BanIPAddress(ctx context.Context, arg BanIPAddressParams) error {
	_, err := q.db.ExecContext(ctx, banIPAddress, arg.IpAddress, arg.Notes)
	return err
}

const changeDisplayName = `-- name: ChangeDisplayName :exec
UPDATE users SET display_name = $1, previous_names = previous_names || $2, namechanged_at = $3 WHERE id = $4
`

type ChangeDisplayNameParams struct {
	DisplayName   string
	PreviousNames sql.NullString
	NamechangedAt sql.NullTime
	ID            string
}

func (q *Queries) ChangeDisplayName(ctx context.Context, arg ChangeDisplayNameParams) error {
	_, err := q.db.ExecContext(ctx, changeDisplayName,
		arg.DisplayName,
		arg.PreviousNames,
		arg.NamechangedAt,
		arg.ID,
	)
	return err
}

const doesInboundActivityExist = `-- name: DoesInboundActivityExist :one
SELECT count(*) FROM ap_accepted_activities WHERE iri = $1 AND actor = $2 AND TYPE = $3
`

type DoesInboundActivityExistParams struct {
	Iri   string
	Actor string
	Type  string
}

func (q *Queries) DoesInboundActivityExist(ctx context.Context, arg DoesInboundActivityExistParams) (int64, error) {
	row := q.db.QueryRowContext(ctx, doesInboundActivityExist, arg.Iri, arg.Actor, arg.Type)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const getFederationFollowerApprovalRequests = `-- name: GetFederationFollowerApprovalRequests :many
SELECT iri, inbox, name, username, image, created_at FROM ap_followers WHERE approved_at IS null AND disabled_at is null
`

type GetFederationFollowerApprovalRequestsRow struct {
	Iri       string
	Inbox     string
	Name      sql.NullString
	Username  string
	Image     sql.NullString
	CreatedAt sql.NullTime
}

func (q *Queries) GetFederationFollowerApprovalRequests(ctx context.Context) ([]GetFederationFollowerApprovalRequestsRow, error) {
	rows, err := q.db.QueryContext(ctx, getFederationFollowerApprovalRequests)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GetFederationFollowerApprovalRequestsRow
	for rows.Next() {
		var i GetFederationFollowerApprovalRequestsRow
		if err := rows.Scan(
			&i.Iri,
			&i.Inbox,
			&i.Name,
			&i.Username,
			&i.Image,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getFederationFollowersWithOffset = `-- name: GetFederationFollowersWithOffset :many
SELECT iri, inbox, name, username, image, created_at FROM ap_followers WHERE approved_at is not null ORDER BY created_at DESC LIMIT $1 OFFSET $2
`

type GetFederationFollowersWithOffsetParams struct {
	Limit  int32
	Offset int32
}

type GetFederationFollowersWithOffsetRow struct {
	Iri       string
	Inbox     string
	Name      sql.NullString
	Username  string
	Image     sql.NullString
	CreatedAt sql.NullTime
}

func (q *Queries) GetFederationFollowersWithOffset(ctx context.Context, arg GetFederationFollowersWithOffsetParams) ([]GetFederationFollowersWithOffsetRow, error) {
	rows, err := q.db.QueryContext(ctx, getFederationFollowersWithOffset, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GetFederationFollowersWithOffsetRow
	for rows.Next() {
		var i GetFederationFollowersWithOffsetRow
		if err := rows.Scan(
			&i.Iri,
			&i.Inbox,
			&i.Name,
			&i.Username,
			&i.Image,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getFollowerByIRI = `-- name: GetFollowerByIRI :one
SELECT iri, inbox, name, username, image, request, request_object, created_at, approved_at, disabled_at FROM ap_followers WHERE iri = $1
`

func (q *Queries) GetFollowerByIRI(ctx context.Context, iri string) (ApFollower, error) {
	row := q.db.QueryRowContext(ctx, getFollowerByIRI, iri)
	var i ApFollower
	err := row.Scan(
		&i.Iri,
		&i.Inbox,
		&i.Name,
		&i.Username,
		&i.Image,
		&i.Request,
		&i.RequestObject,
		&i.CreatedAt,
		&i.ApprovedAt,
		&i.DisabledAt,
	)
	return i, err
}

const getFollowerCount = `-- name: GetFollowerCount :one


SElECT count(*) FROM ap_followers WHERE approved_at is not null
`

// Queries added to query.sql must be compiled into Go code with sqlc. Read README.md for details.
// Federation related queries.
func (q *Queries) GetFollowerCount(ctx context.Context) (int64, error) {
	row := q.db.QueryRowContext(ctx, getFollowerCount)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const getIPAddressBans = `-- name: GetIPAddressBans :many
SELECT ip_address, notes, created_at FROM ip_bans
`

func (q *Queries) GetIPAddressBans(ctx context.Context) ([]IpBan, error) {
	rows, err := q.db.QueryContext(ctx, getIPAddressBans)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []IpBan
	for rows.Next() {
		var i IpBan
		if err := rows.Scan(&i.IpAddress, &i.Notes, &i.CreatedAt); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getInboundActivitiesWithOffset = `-- name: GetInboundActivitiesWithOffset :many
SELECT iri, actor, type, timestamp FROM ap_accepted_activities ORDER BY timestamp DESC LIMIT $1 OFFSET $2
`

type GetInboundActivitiesWithOffsetParams struct {
	Limit  int32
	Offset int32
}

type GetInboundActivitiesWithOffsetRow struct {
	Iri       string
	Actor     string
	Type      string
	Timestamp time.Time
}

func (q *Queries) GetInboundActivitiesWithOffset(ctx context.Context, arg GetInboundActivitiesWithOffsetParams) ([]GetInboundActivitiesWithOffsetRow, error) {
	rows, err := q.db.QueryContext(ctx, getInboundActivitiesWithOffset, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GetInboundActivitiesWithOffsetRow
	for rows.Next() {
		var i GetInboundActivitiesWithOffsetRow
		if err := rows.Scan(
			&i.Iri,
			&i.Actor,
			&i.Type,
			&i.Timestamp,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getInboundActivityCount = `-- name: GetInboundActivityCount :one
SELECT count(*) FROM ap_accepted_activities
`

func (q *Queries) GetInboundActivityCount(ctx context.Context) (int64, error) {
	row := q.db.QueryRowContext(ctx, getInboundActivityCount)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const getLocalPostCount = `-- name: GetLocalPostCount :one
SElECT count(*) FROM ap_outbox
`

func (q *Queries) GetLocalPostCount(ctx context.Context) (int64, error) {
	row := q.db.QueryRowContext(ctx, getLocalPostCount)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const getNotificationDestinationsForChannel = `-- name: GetNotificationDestinationsForChannel :many
SELECT destination FROM notifications WHERE channel = $1
`

func (q *Queries) GetNotificationDestinationsForChannel(ctx context.Context, channel string) ([]string, error) {
	rows, err := q.db.QueryContext(ctx, getNotificationDestinationsForChannel, channel)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []string
	for rows.Next() {
		var destination string
		if err := rows.Scan(&destination); err != nil {
			return nil, err
		}
		items = append(items, destination)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getObjectFromOutboxByIRI = `-- name: GetObjectFromOutboxByIRI :one
SELECT value, live_notification, created_at FROM ap_outbox WHERE iri = $1
`

type GetObjectFromOutboxByIRIRow struct {
	Value            []byte
	LiveNotification sql.NullBool
	CreatedAt        sql.NullTime
}

func (q *Queries) GetObjectFromOutboxByIRI(ctx context.Context, iri string) (GetObjectFromOutboxByIRIRow, error) {
	row := q.db.QueryRowContext(ctx, getObjectFromOutboxByIRI, iri)
	var i GetObjectFromOutboxByIRIRow
	err := row.Scan(&i.Value, &i.LiveNotification, &i.CreatedAt)
	return i, err
}

const getOutboxWithOffset = `-- name: GetOutboxWithOffset :many
SELECT value FROM ap_outbox LIMIT $1 OFFSET $2
`

type GetOutboxWithOffsetParams struct {
	Limit  int32
	Offset int32
}

func (q *Queries) GetOutboxWithOffset(ctx context.Context, arg GetOutboxWithOffsetParams) ([][]byte, error) {
	rows, err := q.db.QueryContext(ctx, getOutboxWithOffset, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items [][]byte
	for rows.Next() {
		var value []byte
		if err := rows.Scan(&value); err != nil {
			return nil, err
		}
		items = append(items, value)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRejectedAndBlockedFollowers = `-- name: GetRejectedAndBlockedFollowers :many
SELECT iri, name, username, image, created_at, disabled_at FROM ap_followers WHERE disabled_at is not null
`

type GetRejectedAndBlockedFollowersRow struct {
	Iri        string
	Name       sql.NullString
	Username   string
	Image      sql.NullString
	CreatedAt  sql.NullTime
	DisabledAt sql.NullTime
}

func (q *Queries) GetRejectedAndBlockedFollowers(ctx context.Context) ([]GetRejectedAndBlockedFollowersRow, error) {
	rows, err := q.db.QueryContext(ctx, getRejectedAndBlockedFollowers)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GetRejectedAndBlockedFollowersRow
	for rows.Next() {
		var i GetRejectedAndBlockedFollowersRow
		if err := rows.Scan(
			&i.Iri,
			&i.Name,
			&i.Username,
			&i.Image,
			&i.CreatedAt,
			&i.DisabledAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getUserByAccessToken = `-- name: GetUserByAccessToken :one
SELECT users.id, display_name, display_color, users.created_at, disabled_at, previous_names, namechanged_at, authenticated_at, scopes FROM users, user_access_tokens WHERE token = $1 AND users.id = user_id
`

type GetUserByAccessTokenRow struct {
	ID              string
	DisplayName     string
	DisplayColor    int32
	CreatedAt       sql.NullTime
	DisabledAt      sql.NullTime
	PreviousNames   sql.NullString
	NamechangedAt   sql.NullTime
	AuthenticatedAt sql.NullTime
	Scopes          sql.NullString
}

func (q *Queries) GetUserByAccessToken(ctx context.Context, token string) (GetUserByAccessTokenRow, error) {
	row := q.db.QueryRowContext(ctx, getUserByAccessToken, token)
	var i GetUserByAccessTokenRow
	err := row.Scan(
		&i.ID,
		&i.DisplayName,
		&i.DisplayColor,
		&i.CreatedAt,
		&i.DisabledAt,
		&i.PreviousNames,
		&i.NamechangedAt,
		&i.AuthenticatedAt,
		&i.Scopes,
	)
	return i, err
}

const getUserByAuth = `-- name: GetUserByAuth :one
SELECT users.id, display_name, display_color, users.created_at, disabled_at, previous_names, namechanged_at, authenticated_at, scopes FROM auth, users WHERE token = $1 AND auth.type = $2 AND users.id = auth.user_id
`

type GetUserByAuthParams struct {
	Token string
	Type  string
}

type GetUserByAuthRow struct {
	ID              string
	DisplayName     string
	DisplayColor    int32
	CreatedAt       sql.NullTime
	DisabledAt      sql.NullTime
	PreviousNames   sql.NullString
	NamechangedAt   sql.NullTime
	AuthenticatedAt sql.NullTime
	Scopes          sql.NullString
}

func (q *Queries) GetUserByAuth(ctx context.Context, arg GetUserByAuthParams) (GetUserByAuthRow, error) {
	row := q.db.QueryRowContext(ctx, getUserByAuth, arg.Token, arg.Type)
	var i GetUserByAuthRow
	err := row.Scan(
		&i.ID,
		&i.DisplayName,
		&i.DisplayColor,
		&i.CreatedAt,
		&i.DisabledAt,
		&i.PreviousNames,
		&i.NamechangedAt,
		&i.AuthenticatedAt,
		&i.Scopes,
	)
	return i, err
}

const getUserDisplayNameByToken = `-- name: GetUserDisplayNameByToken :one
SELECT display_name FROM users, user_access_tokens WHERE token = $1 AND users.id = user_id AND disabled_at = NULL
`

func (q *Queries) GetUserDisplayNameByToken(ctx context.Context, token string) (string, error) {
	row := q.db.QueryRowContext(ctx, getUserDisplayNameByToken, token)
	var display_name string
	err := row.Scan(&display_name)
	return display_name, err
}

const isDisplayNameAvailable = `-- name: IsDisplayNameAvailable :one
SELECT count(*) FROM users WHERE display_name = $1 AND authenticated_at is not null AND disabled_at is NULL
`

func (q *Queries) IsDisplayNameAvailable(ctx context.Context, displayName string) (int64, error) {
	row := q.db.QueryRowContext(ctx, isDisplayNameAvailable, displayName)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const isIPAddressBlocked = `-- name: IsIPAddressBlocked :one
SELECT count(*) FROM ip_bans WHERE ip_address = $1
`

func (q *Queries) IsIPAddressBlocked(ctx context.Context, ipAddress string) (int64, error) {
	row := q.db.QueryRowContext(ctx, isIPAddressBlocked, ipAddress)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const rejectFederationFollower = `-- name: RejectFederationFollower :exec
UPDATE ap_followers SET approved_at = null, disabled_at = $1 WHERE iri = $2
`

type RejectFederationFollowerParams struct {
	DisabledAt sql.NullTime
	Iri        string
}

func (q *Queries) RejectFederationFollower(ctx context.Context, arg RejectFederationFollowerParams) error {
	_, err := q.db.ExecContext(ctx, rejectFederationFollower, arg.DisabledAt, arg.Iri)
	return err
}

const removeFollowerByIRI = `-- name: RemoveFollowerByIRI :exec
DELETE FROM ap_followers WHERE iri = $1
`

func (q *Queries) RemoveFollowerByIRI(ctx context.Context, iri string) error {
	_, err := q.db.ExecContext(ctx, removeFollowerByIRI, iri)
	return err
}

const removeIPAddressBan = `-- name: RemoveIPAddressBan :exec
DELETE FROM ip_bans WHERE ip_address = $1
`

func (q *Queries) RemoveIPAddressBan(ctx context.Context, ipAddress string) error {
	_, err := q.db.ExecContext(ctx, removeIPAddressBan, ipAddress)
	return err
}

const removeNotificationDestinationForChannel = `-- name: RemoveNotificationDestinationForChannel :exec
DELETE FROM notifications WHERE channel = $1 AND destination = $2
`

type RemoveNotificationDestinationForChannelParams struct {
	Channel     string
	Destination string
}

func (q *Queries) RemoveNotificationDestinationForChannel(ctx context.Context, arg RemoveNotificationDestinationForChannelParams) error {
	_, err := q.db.ExecContext(ctx, removeNotificationDestinationForChannel, arg.Channel, arg.Destination)
	return err
}

const setAccessTokenToOwner = `-- name: SetAccessTokenToOwner :exec
UPDATE user_access_tokens SET user_id = $1 WHERE token = $2
`

type SetAccessTokenToOwnerParams struct {
	UserID string
	Token  string
}

func (q *Queries) SetAccessTokenToOwner(ctx context.Context, arg SetAccessTokenToOwnerParams) error {
	_, err := q.db.ExecContext(ctx, setAccessTokenToOwner, arg.UserID, arg.Token)
	return err
}

const setUserAsAuthenticated = `-- name: SetUserAsAuthenticated :exec
UPDATE users SET authenticated_at = CURRENT_TIMESTAMP WHERE id = $1
`

func (q *Queries) SetUserAsAuthenticated(ctx context.Context, id string) error {
	_, err := q.db.ExecContext(ctx, setUserAsAuthenticated, id)
	return err
}

const updateFollowerByIRI = `-- name: UpdateFollowerByIRI :exec
UPDATE ap_followers SET inbox = $1, name = $2, username = $3, image = $4 WHERE iri = $5
`

type UpdateFollowerByIRIParams struct {
	Inbox    string
	Name     sql.NullString
	Username string
	Image    sql.NullString
	Iri      string
}

func (q *Queries) UpdateFollowerByIRI(ctx context.Context, arg UpdateFollowerByIRIParams) error {
	_, err := q.db.ExecContext(ctx, updateFollowerByIRI,
		arg.Inbox,
		arg.Name,
		arg.Username,
		arg.Image,
		arg.Iri,
	)
	return err
}
