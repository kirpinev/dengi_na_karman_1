import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { StatusBadge } from "@alfalab/core-components/status-badge";
import { List } from "@alfalab/core-components/list";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [transfer, setTransfer] = useState<string>("self");
  const [plan, setPlan] = useState<string>("");

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Gap size={24} />
          <Typography.TitleResponsive
            font="system"
            tag="h1"
            view="medium"
            weight="semibold"
          >
            Деньги на карман
          </Typography.TitleResponsive>
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Умный помощник для финансовой помощи детям
          </Typography.Text>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Возможности
        </Typography.TitleResponsive>

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Умные автоплатежи
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Настраивайте регулярные переводы по расписанию или по состоянию
              баланса. Создавайте резерв на дополнительные расходы.
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Запросы от ребёнка
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Ребёнок может запросить дополнительные средства через приложение.
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Финансовая аналитика
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Отслеживайте динамику автоплатежей и создавайте финансовые
              привычки ребёнка.
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Как это работает
        </Typography.TitleResponsive>

        <div style={{ display: "flex", gap: "1rem" }}>
          <ButtonMobile
            block
            view={transfer !== "self" ? "secondary" : "primary"}
            onClick={() => setTransfer("self")}
            size="xs"
          >
            Для родителя
          </ButtonMobile>
          <ButtonMobile
            block
            onClick={() => setTransfer("sfr")}
            view={transfer !== "sfr" ? "secondary" : "primary"}
            size="xs"
          >
            Для ребенка
          </ButtonMobile>
        </div>

        <Gap size={32} />

        {transfer === "self" ? (
          <>
            <List tag="ul" marker="•">
              <List.Item>Гибкие настройки в одном месте</List.Item>
              <List.Item>Уведомления о предстоящих автопереводах</List.Item>
              <List.Item>Добавление нескольких членов семьи</List.Item>
              <List.Item>Учет расходов</List.Item>
            </List>
          </>
        ) : (
          <List tag="ul" marker="•">
            <List.Item>Запрос денежных средств прямо из приложения</List.Item>
            <List.Item>
              Быстрый автоперевод от родителя при внеплановых ситуациях
            </List.Item>
          </List>
        )}

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Выберите план
        </Typography.TitleResponsive>

        <div className={appSt.plans}>
          <div
            className={appSt.plan}
            style={{
              ...(plan === "start" && { borderColor: "black" }),
            }}
            onClick={() => setPlan("start")}
          >
            {plan === "start" && (
              <StatusBadge
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <div>
              <Typography.Text tag="p" view="primary-small" weight="bold">
                Старт
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                до 1 члена семьи
              </Typography.Text>
            </div>
            <Typography.Text
              tag="p"
              view="primary-medium"
              style={{ marginBottom: 0 }}
            >
              0 руб./мес.
            </Typography.Text>
          </div>
          <div
            className={appSt.plan}
            style={{
              ...(plan === "comfort" && { borderColor: "black" }),
            }}
            onClick={() => setPlan("comfort")}
          >
            {plan === "comfort" && (
              <StatusBadge
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <div>
              <Typography.Text tag="p" view="primary-small" weight="bold">
                Комфорт
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                до 3 членов семьи
              </Typography.Text>
            </div>
            <Typography.Text
              tag="p"
              view="primary-medium"
              style={{ marginBottom: 0 }}
            >
              99 руб./мес.
            </Typography.Text>
          </div>
          <div
            className={appSt.plan}
            style={{
              ...(plan === "smart" && { borderColor: "black" }),
            }}
            onClick={() => setPlan("smart")}
          >
            {plan === "smart" && (
              <StatusBadge
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <div>
              <Typography.Text tag="p" view="primary-small" weight="bold">
                Подписка Альфа-Смарт
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Комфорт + привилегии подписки
              </Typography.Text>
            </div>
            <Typography.Text
              tag="p"
              view="primary-medium"
              style={{ marginBottom: 0, minWidth: "100px" }}
            >
              299 руб./мес.
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={24} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          disabled={!plan}
          block
          view="primary"
          onClick={submit}
        >
          Подключить сервис
        </ButtonMobile>
      </div>
    </div>
  );
};
