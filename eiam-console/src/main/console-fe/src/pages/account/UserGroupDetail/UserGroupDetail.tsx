/*
 * eiam-console - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { getUserGroup, removeUser, updateUserGroup } from '@/services/account';
import { history } from '@@/core/history';

import { PageContainer, ProDescriptions, RouteContext } from '@ant-design/pro-components';
import { useAsyncEffect, useMount } from 'ahooks';
import { App, Button, Skeleton } from 'antd';
import React, { useState } from 'react';
import MemberList from './components/MemberList';
import { UserGroupDetailTabs } from './constant';
import queryString from 'query-string';
import { useIntl, useLocation } from '@umijs/max';
import useStyles from './style';
import AppAccess from './components/AppAccess';
import { ExclamationCircleFilled } from '@ant-design/icons';

/**
 * 用户组详情
 */
export default () => {
  const intl = useIntl();
  const { styles } = useStyles();
  const { message, modal } = App.useApp();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { id } = query as { id: string };
  const { type } = query as {
    type: UserGroupDetailTabs;
  };

  const [detail, setDetail] = useState<AccountAPI.GetUserGroup | Record<string, string>>();
  const [tabActiveKey, setTabActiveKey] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useMount(() => {
    if (!id) {
      message
        .warning(intl.formatMessage({ id: 'pages.account.user_group_detail.use_mount.message' }))
        .then();
      history.push(`/account/user-group`);
      return;
    }
    if (!type || !UserGroupDetailTabs[type]) {
      setTabActiveKey(UserGroupDetailTabs.member);
      history.push({
        pathname: location.pathname,
        search: queryString.stringify({ type: UserGroupDetailTabs.member, id: id }),
      });
      return;
    }
    setTabActiveKey(type);
  });

  useAsyncEffect(async () => {
    if (id) {
      setLoading(true);
      const { success, result } = await getUserGroup(id);
      if (success) {
        setDetail(result);
        setLoading(false);
        return;
      }
    }
  }, [id]);

  const description = (
    <RouteContext.Consumer>
      {({ isMobile }) =>
        loading ? (
          <Skeleton active paragraph={{ rows: 1 }} />
        ) : (
          <ProDescriptions<Record<string, string>>
            size="small"
            column={isMobile ? 1 : 3}
            //只有具有修改权限才可以修改该信息
            editable={{
              onSave: async (key, record) => {
                let success: boolean;
                const result = await updateUserGroup({ ...record });
                success = result.success;
                if (success) {
                  message.success(intl.formatMessage({ id: 'app.operation_success' }));
                  setDetail({ ...record });
                  return Promise.resolve(true);
                }
                return Promise.resolve(false);
              },
            }}
            dataSource={{ ...detail }}
          >
            <ProDescriptions.Item
              dataIndex="name"
              label={intl.formatMessage({
                id: 'pages.account.user_group_detail.descriptions.name',
              })}
              fieldProps={{
                maxLength: 8,
              }}
              copyable
            />
            <ProDescriptions.Item
              dataIndex="code"
              label={intl.formatMessage({
                id: 'pages.account.user_group_detail.descriptions.code',
              })}
              copyable
              editable={false}
            />
            <ProDescriptions.Item
              label={intl.formatMessage({
                id: 'pages.account.user_group_detail.descriptions.remark',
              })}
              className={styles.descriptionRemark}
              dataIndex="remark"
              valueType={'textarea'}
              fieldProps={{ rows: 2, maxLength: 20 }}
            />
          </ProDescriptions>
        )
      }
    </RouteContext.Consumer>
  );

  return (
    <PageContainer
      onBack={() => {
        history.push('/account/user-group');
      }}
      title={
        loading ? <Skeleton.Input style={{ width: 50 }} active size={'small'} /> : detail?.name
      }
      content={<>{description}</>}
      tabList={[
        {
          key: UserGroupDetailTabs.member,
          tab: intl.formatMessage({ id: 'pages.account.user_group_detail.tab_list.member' }),
        },
        {
          key: UserGroupDetailTabs.app_access,
          tab: intl.formatMessage({
            id: 'pages.account.user_group_detail.tab_list.app_access',
          }),
        },
      ]}
      extra={[
        <Button
          key="delete"
          type="primary"
          danger
          onClick={() => {
            const confirmed = modal.error({
              centered: true,
              title: intl.formatMessage({
                id: 'pages.account.user_group_detail.extra.delete.confirm_title',
              }),
              icon: <ExclamationCircleFilled />,
              content: intl.formatMessage({
                id: 'pages.account.user_group_detail.extra.delete.confirm_content',
              }),
              okText: intl.formatMessage({ id: 'app.confirm' }),
              okType: 'danger',
              okCancel: true,
              cancelText: intl.formatMessage({ id: 'app.cancel' }),
              onOk: async () => {
                const { success } = await removeUser(id);
                if (success) {
                  message.success(intl.formatMessage({ id: 'app.operation_success' }));
                  confirmed.destroy();
                }
              },
            });
          }}
        >
          {intl.formatMessage({ id: 'pages.account.user_group_detail.extra.delete' })}
        </Button>,
      ]}
      tabActiveKey={tabActiveKey}
      onTabChange={(key: string) => {
        setTabActiveKey(key);
        history.replace({
          pathname: location.pathname,
          search: queryString.stringify({ id, type: key }),
        });
      }}
    >
      {/*成员信息*/}
      {type === UserGroupDetailTabs.member && <MemberList id={id} />}
      {/*授权应用*/}
      {type === UserGroupDetailTabs.app_access && <AppAccess userGroupId={id} />}
    </PageContainer>
  );
};
